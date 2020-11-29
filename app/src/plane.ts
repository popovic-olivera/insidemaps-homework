import * as THREE from "three";

export class Plane {
    private originalPlane: THREE.Mesh;

    constructor(private width = 2000,
                private height = 2000,
                private color = 0xffff00) {
        const geometry = new THREE.PlaneBufferGeometry(this.width, this.height);
        const material = new THREE.MeshBasicMaterial({color: this.color});

        this.originalPlane = new THREE.Mesh(geometry, material);
    }

    setPosition(x = 0, y = 0, z = 0) {
        this.originalPlane.position.set(x, y, z);
    }

    rotate(x = 0, y = 0, z = 0) {
        this.originalPlane.rotateX(x);
        this.originalPlane.rotateY(y);
        this.originalPlane.rotateZ(z);
    }

    get getOriginalPlane() {
        return this.originalPlane;
    }
}