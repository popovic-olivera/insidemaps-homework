import * as THREE from "three";

export class Box {
    private static counter = 0;
    private originalBox: THREE.Mesh;

    constructor(boxSize: number) {
        const geometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
        const material = new THREE.MeshPhongMaterial({  specular: 0xD76531,
                                                        color: 0xef8834,
                                                        emissive: 0x8c2317,
                                                        shininess: 50,
                                                        flatShading: true 
                                                    });
        Box.counter += 1;
        geometry.name = `Box${Box.counter}`;

        this.originalBox = new THREE.Mesh(geometry, material);
    }

    setPosition(x = 0, y = 0, z = 0) {
        this.originalBox.position.set(x, y, z);
    }

    get getOriginalBox() {
        return this.originalBox;
    }
}