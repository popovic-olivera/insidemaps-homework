import * as THREE from "three";

export class Box {
    private originalBox: THREE.Mesh;

    constructor(boxSize: number) {
        const geometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
        const material = new THREE.MeshPhongMaterial({  specular: 0xD76531,
                                                        color: 0xef8834,
                                                        emissive: 0x8c2317,
                                                        shininess: 50,
                                                        flatShading: true 
                                                    });

        this.originalBox = new THREE.Mesh(geometry, material);
    }

    setPosition(x = 0, y = 0, z = 0) {
        this.originalBox.position.set(x, y, z);
    }

    get getOriginalBox() {
        return this.originalBox;
    }
}