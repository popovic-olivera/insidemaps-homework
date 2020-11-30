import { Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { Box } from './box';
import { Plane } from './plane';
import Popup from './popup';
import { initCamera, initControls, initScene, intitRenderer } from './initialize';
import './three-scene.css';

type sceneState = {
  x2D: number,
  y2D: number,
  x3D: number,
  y3D: number,
  z3D: number,
  box: THREE.Mesh
}

class ThreeScene extends Component<{}, sceneState > {
  private mount: HTMLDivElement | null = null;

  constructor(props: Object) {
    super(props);

    this.state = {
      x2D: 0,
      y2D: 0,
      x3D: 0,
      y3D: 0,
      z3D: 0,
      box: new THREE.Mesh()
    };

    this.setWindowListeners = this.setWindowListeners.bind(this);
    this.onMouseClick = this.onMouseClick.bind(this);
  }

  componentDidMount() {
     // Create a Scene
     const scene = new THREE.Scene();
     initScene(scene);
 
     // Create Renderer
     const renderer = new THREE.WebGLRenderer({ antialias: true });
     intitRenderer(renderer);
     this.mount!.appendChild(renderer.domElement);
 
     // Create Camera
     const camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 1, 1000);
     initCamera(camera);
 
     // Initialize Camera controls
     const controls = new OrbitControls(camera, renderer.domElement);
     initControls(controls);
    
    // Add floor to the Scene
    const plane = new Plane();
    plane.setPosition(new THREE.Vector3(0, -Box.BOX_SIZE/2, 0));
    plane.rotate(new THREE.Vector3(-Math.PI / 2));
    scene.add(plane.getOriginalPlane);

    // Draw three main cubes
    for (let i = 0; i < 3; i ++) {
      const box = new Box(Box.BOX_SIZE);

      const angle = (Math.PI * 2 / 3) * i;
      const r = 150;
      box.setPosition(new THREE.Vector3(r * Math.cos(angle), 0, r * Math.sin(angle)));

      scene.add(box.getOriginalBox);
    }

    function animate(thisObject: ThreeScene) {
      requestAnimationFrame(function() {animate(thisObject);});

      controls.update();

      const popup = document.querySelector('.popup') as HTMLDivElement;
      if (popup.style.display === 'block') {
        const canvas = renderer.domElement; 
        const vector = new THREE.Vector3(thisObject.state.x3D, thisObject.state.y3D, thisObject.state.z3D);

        vector.project(camera);

        vector.x = Math.round((0.5 + vector.x / 2) * (canvas.width / window.devicePixelRatio));
        vector.y = Math.round((0.5 - vector.y / 2) * (canvas.height / window.devicePixelRatio));

        thisObject.setState(() => ({
          x2D: vector.x,
          y2D: vector.y
        }));

      }

        renderer.render(scene, camera);
    };

    // react on resize, click, touch, reset view button click
    this.setWindowListeners(camera, renderer, scene, controls);

    // Animation loop
    animate(this);
  }

  setWindowListeners(camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer,
                     scene: THREE.Scene, controls: OrbitControls) {
                       
    const onWindowResize = function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
  
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', onWindowResize, false);

    document.getElementsByClassName('resetBtn')[0]!.addEventListener('click', () => {
      controls.reset();
      camera.position.set(400, 300, 0);
    });

    const canvas = renderer.domElement; 
    canvas.addEventListener('pointerdown', (event) => { this.onMouseClick(event, camera, scene, renderer)}, false);
    canvas.addEventListener('mousedown', (event) => { this.onMouseClick(event, camera, scene, renderer)}, false);
    canvas.addEventListener('touchstart', (event) => { this.onMouseClick(event, camera, scene, renderer)}, false);
  }

  onMouseClick(event: MouseEvent | TouchEvent, camera: THREE.PerspectiveCamera, 
               scene: THREE.Scene, renderer: THREE.WebGLRenderer) {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const canvas = renderer.domElement; 

    // Get click point and map it to (-1, 1) interval
    if (event instanceof MouseEvent) {
      mouse.x = (event.clientX / canvas.width) * 2 - 1;
      mouse.y = - (event.clientY / canvas.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      mouse.x = Math.round((0.5 + mouse.x / 2) * (canvas.width / window.devicePixelRatio));
      mouse.y = Math.round((0.5 - mouse.y / 2) * (canvas.height / window.devicePixelRatio));
    } else {
      mouse.x = ((event as TouchEvent).touches[0].clientX / window.innerWidth) * 2 - 1;
      mouse.y = - ((event as TouchEvent).touches[0].clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      mouse.x = Math.round((0.5 + mouse.x / 2) * (window.innerWidth / window.devicePixelRatio));
      mouse.y = Math.round((0.5 - mouse.y / 2) * (window.innerHeight / window.devicePixelRatio));
    }
    
    const intersects = raycaster.intersectObjects(scene.children);
  
    // Check cursor interaction with objects
    const popup = document.querySelector('.popup') as HTMLDivElement;
    if (intersects.length > 0) {
      const mesh = intersects[0].object as THREE.Mesh;

      if (mesh.geometry.type.includes('Box') && popup.style.display === 'none')
      {
        const position3D = intersects[0].point; 

        this.setState(() => ({
          x2D: mouse.x,
          y2D: mouse.y,
          x3D: position3D.x,
          y3D: position3D.y,
          z3D: position3D.z,
          box: mesh
        }));

        popup.style.display = 'block';
      } else {
        popup.style.display = 'none';
      }
    } else {
      popup.style.display = 'none';
    }
  }

  render() {
    const props = {
      x: this.state.x2D,
      y: this.state.y2D,
      box: this.state.box
    };

    return  <div>
              <div ref={ref => (this.mount = ref)} id='scene'>
                <button className='resetBtn'>Reset view</button>
                <Popup {...props}/>
              </div>
            </div>;
  }
}

export default ThreeScene;
