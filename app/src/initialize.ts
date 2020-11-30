import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export function initScene(scene: THREE.Scene) {
    scene.background = new THREE.Color(0xcccccc);
    scene.fog = new THREE.FogExp2(0xcccccc, 0.002);

    // Add Lighting
    const pointLight = new THREE.PointLight(0xffffff, 1, 0);
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);

    pointLight.position.set(0, 1000, 0);
    ambientLight.position.set(1000, 1000, 1000);

    scene.add(pointLight);
    scene.add(ambientLight);
}

export function intitRenderer(renderer: THREE.WebGLRenderer) {
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xcccccc, 1);
}

export function initCamera(camera: THREE.PerspectiveCamera) {
    camera.position.set(400, 100, 0);
}

export function initControls(controls: OrbitControls) {
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.screenSpacePanning = false;
    controls.minDistance = 100;
    controls.maxDistance = 100;
    controls.maxPolarAngle = Math.PI / 2;
}