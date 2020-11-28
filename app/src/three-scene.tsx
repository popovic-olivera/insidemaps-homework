import { Component } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { Box } from "./box";
import { initCamera, initControls, initScene, intitRenderer } from "./initialize";
import { Plane } from "./plane";

import './three-scene.css';

class ThreeScene extends Component {
  private readonly BOX_SIZE = 50;
  private mount: any;

  componentDidMount() {
    // Create a Scene
    const scene = new THREE.Scene();
    initScene(scene);

    // Create Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    intitRenderer(renderer);
    this.mount.appendChild(renderer.domElement);

    // Create Camera
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 1, 1000);
    initCamera(camera);

    // Initialize Camera controls
    const controls = new OrbitControls(camera, renderer.domElement);
    initControls(controls);

    // Init raycaster and mouse
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // Add floor to the Scene
    const plane = new Plane();
    plane.setPosition(0, -this.BOX_SIZE/2, 0);
    plane.rotate(-Math.PI / 2);
    scene.add(plane.getOriginalPlane);

    // Draw background boxes
    // for (let i = 0; i < 100; i ++) {
    //   const box = new Box(this.BOX_SIZE);

    //   const angle = Math.random() * Math.PI * 2;
    //   const r = Math.random() * 400 + 400;
    //   box.setPosition(r * Math.cos(angle), 0, r * Math.sin(angle));

    //   scene.add(box.getOriginalBox);
    // }

    // Draw three main cubes
    for (let i = 0; i < 3; i ++) {
      const box = new Box(this.BOX_SIZE);

      const angle = (Math.PI * 2 / 3) * i;
      const r = 130;
      box.setPosition(r * Math.cos(angle), 0, r * Math.sin(angle));

      scene.add(box.getOriginalBox);
    }

    const onWindowResize = function () {
        camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', onWindowResize, false);
    window.addEventListener('keydown', event => {
      if (event.key === 'r') {
        controls.reset();
      }
    });

    const renderScene = function () {
      raycaster.setFromCamera(mouse, camera);
    
      const intersects = raycaster.intersectObjects(scene.children);
    
      if ( intersects.length > 0 ) {
        // TODO
        // Catches floor and background cubes ?!
      }
    
      renderer.render( scene, camera );
    }

    let onMouseMove = function (event: any) {

      // calculate mouse position in normalized device coordinates
      // (-1 to +1) for both components
    
      mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
      mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    
    }

    window.addEventListener('mousemove', onMouseMove, false);
    // window.requestAnimationFrame(renderScene);

    const animate = function () {
      requestAnimationFrame(animate);

      controls.update();
      
      renderScene();
    };

    animate();
  }

  render() {
      return <div ref={ref => (this.mount = ref)}/>;
  }
}

export default ThreeScene;
