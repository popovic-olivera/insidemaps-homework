import { ChangeEvent, Component } from "react";
import * as THREE from "three";

import './popup.css';

type PopupProp = {
    x: number,
    y: number,
    box: THREE.Mesh
}

class Popup extends Component<PopupProp, {}>{
    constructor(props: PopupProp) {
        super(props);

        this.nameChanged = this.nameChanged.bind(this);
        this.sizeChanged = this.sizeChanged.bind(this);
        this.colorChanged = this.colorChanged.bind(this);
    }

    exit() {
        const popup = document.querySelector('.popup') as HTMLDivElement;
        popup.style.display = 'none';
    }

    nameChanged(e: ChangeEvent<HTMLInputElement>) {
        this.props.box.name = e.target.value;
    }

    sizeChanged(e: ChangeEvent<HTMLInputElement>) {
        this.props.box.scale.x = parseInt(e.target.value);
    }

    colorChanged(e: ChangeEvent<HTMLInputElement>) {
        (this.props.box.material as THREE.MeshPhongMaterial).color = new THREE.Color(e.target.value);
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
                    <input id="name" name="name" defaultValue={this.props.box.geometry.name} onChange={this.nameChanged}/>

                    <label htmlFor="size">Size:</label>
                    <input id="size" name="size" defaultValue={sizeVec.x} onChange={this.sizeChanged}/>

                    <label htmlFor="color">Color:</label>
                    <input id="color" name="color" defaultValue={color.getHexString()} onChange={this.colorChanged}/>
                </div>;
    }
}

export default Popup;