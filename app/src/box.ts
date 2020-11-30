import * as THREE from 'three';

/*
*   Wrapper class for drawing boxes in THREE.js
*/

export class Box {
    public static readonly BOX_SIZE = 70;
    private static counter = 0;
    private originalBox: THREE.Mesh;

    constructor(boxSize: number) {
        const geometry = new THREE.BoxBufferGeometry(boxSize, boxSize, boxSize);
        const material = new THREE.MeshPhongMaterial({  color: 0x156289,
                                                        shininess: 50,
                                                        flatShading: true 
                                                    });
        Box.counter += 1;
        geometry.name = `Box${Box.counter}`;

        this.originalBox = new THREE.Mesh(geometry, material);
    }

    setPosition(vector: THREE.Vector3) {
        this.originalBox.position.set(vector.x, vector.y, vector.z);
    }

    get getOriginalBox() {
        return this.originalBox;
    }
}