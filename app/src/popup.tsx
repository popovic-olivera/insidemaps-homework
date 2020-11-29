import { Component } from "react";
import * as THREE from "three";

import './popup.css';

type PopupProp = {
    x: number,
    y: number,
    box: THREE.Mesh
}

class Popup extends Component<PopupProp, {}>{
    exit() {
        const popup = document.querySelector('.popup') as HTMLDivElement;
        popup.style.display = 'none';
    }

    nameChanged() {
        
    }

    render() {
        this.props.box.geometry.computeBoundingBox();
        let sizeVec = new THREE.Vector3(0, 0, 0);
        this.props.box.geometry.boundingBox?.getSize(sizeVec);
        let color = (this.props.box.material as THREE.MeshPhongMaterial).color;

        return  <div className="popup" style={{top: this.props.y, left: this.props.x}}>
                    <span id="close" onClick={this.exit}>x</span>

                    <p style={{textAlign: "center"}}><strong>Info</strong></p>

                    <label htmlFor="name">Name:</label>
                    <input id="name" name="name" value={this.props.box.geometry.name} onChange={this.nameChanged}/>

                    <label htmlFor="name">Size:</label>
                    <input id="size" name="size" value={sizeVec.x} disabled/>

                    <label htmlFor="name">Color:</label>
                    <input id="color" name="color" value={color.getHexString()} disabled/>
                </div>;
    }
}

export default Popup;