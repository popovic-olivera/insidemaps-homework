import { Component } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

import { Box } from "./box";
import { Plane } from "./plane";
import Popup from "./popup";
import { initCamera, initControls, initScene, intitRenderer } from "./initialize";
import './three-scene.css';

type sceneState = {
  x: number,
  y: number,
  box: THREE.Mesh
}

class ThreeScene extends Component<{}, sceneState > {
  private readonly BOX_SIZE = 70;
  private mount: HTMLDivElement | null = null;

  constructor(props: Object) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
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
    plane.setPosition(0, -this.BOX_SIZE/2, 0);
    plane.rotate(-Math.PI / 2);
    scene.add(plane.getOriginalPlane);

    // Draw three main cubes
    for (let i = 0; i < 3; i ++) {
      const box = new Box(this.BOX_SIZE);

      const angle = (Math.PI * 2 / 3) * i;
      const r = 150;
      box.setPosition(r * Math.cos(angle), 0, r * Math.sin(angle));

      scene.add(box.getOriginalBox);
    }

    const animate = function () {
      requestAnimationFrame(animate);
  
      controls.update();

      renderer.render(scene, camera);
    };

    this.setWindowListeners(camera, renderer, scene);
    animate();
  }

  setWindowListeners(camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer,
                     scene: THREE.Scene) {
    const onWindowResize = function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
  
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', onWindowResize, false);

    window.addEventListener('keydown', event => {
      if (event.key === 'r') {
        camera.position.set(400, 100, 0);
      }
    });

    const canvas = renderer.domElement; 
    canvas.addEventListener('click', (event) => { this.onMouseClick(event, camera, scene, renderer)}, false);
  }

  onMouseClick(event: any, camera: THREE.PerspectiveCamera, 
               scene: THREE.Scene, renderer: THREE.WebGLRenderer) {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const canvas = renderer.domElement; 

    // map to (-1, 1) interval
    mouse.x = (event.clientX / canvas.width) * 2 - 1;
    mouse.y = - (event.clientY / canvas.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    
    const intersects = raycaster.intersectObjects(scene.children);
  
    if (intersects.length > 0) {
      const mesh = intersects[0].object as THREE.Mesh;
      const popup = document.querySelector('.popup') as HTMLDivElement;

      if (mesh.geometry.type.includes('Box') && popup.style.display === 'none')
      {
        mouse.x = Math.round((0.5 + mouse.x / 2) * (canvas.width / window.devicePixelRatio));
        mouse.y = Math.round((0.5 - mouse.y / 2) * (canvas.height / window.devicePixelRatio));
        
        this.setState(() => ({
          x: mouse.x,
          y: mouse.y,
          box: mesh
        }));

        popup.style.display = 'block';
      } else {
        popup.style.display = 'none';
      }
    }
  }

  render() {
    const props = {
      x: this.state.x,
      y: this.state.y,
      box: this.state.box
    };

    return  <div>
              <div ref={ref => (this.mount = ref)} id="scene">
                <Popup {...props}/>
              </div>
            </div>;
  }
}

export default ThreeScene;
