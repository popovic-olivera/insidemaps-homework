import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export function initScene(scene: THREE.Scene) {
    scene.background = new THREE.Color(0xcccccc);
    scene.fog = new THREE.FogExp2(0xcccccc, 0.002);

    // Add Lighting
    const light = new THREE.DirectionalLight(0xfdfdfd, 2);
    light.position.set(400, 500, 0).normalize();
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x000022);
    scene.add(ambientLight);
}

export function intitRenderer(renderer: THREE.WebGLRenderer) {
    renderer.setSize(window.innerWidth, window.innerHeight);
}

export function initCamera(camera: THREE.PerspectiveCamera) {
    camera.position.set(400, 0, 0);
}

export function initControls(controls: OrbitControls) {
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.screenSpacePanning = false;
    controls.minDistance = 100;
    controls.maxDistance = 100;
    controls.maxPolarAngle = Math.PI / 2;
}
