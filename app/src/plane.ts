import * as THREE from 'three';

/*
*   Wrapper class for drawing plane in THREE.js
*/

export class Plane {
    private originalPlane: THREE.Mesh;

    constructor(private width = 2000,
                private height = 2000,
                private color = 0xffff00) {
        const geometry = new THREE.PlaneBufferGeometry(this.width, this.height);
        const material = new THREE.MeshBasicMaterial({color: this.color});

        this.originalPlane = new THREE.Mesh(geometry, material);
    }

    setPosition(vector: THREE.Vector3) {
        this.originalPlane.position.set(vector.x, vector.y, vector.z);
    }

    rotate(vector: THREE.Vector3) {
        this.originalPlane.rotateX(vector.x);
        this.originalPlane.rotateY(vector.y);
        this.originalPlane.rotateZ(vector.z);
    }

    get getOriginalPlane() {
        return this.originalPlane;
    }
}