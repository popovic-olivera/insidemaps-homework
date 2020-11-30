import { Component } from 'react';
import * as THREE from 'three';

import './popup.css';
import { Box } from './box';

type PopupProp = {
    x: number,
    y: number,
    box: THREE.Mesh
}

class Popup extends Component<PopupProp, {}>{

    constructor(props: PopupProp) {
        super(props);

        this.nameEnter = this.nameEnter.bind(this);
        this.sizeEnter = this.sizeEnter.bind(this);
        this.colorEnter = this.colorEnter.bind(this);
    }

    exit() {
        const popup = document.querySelector('.popup') as HTMLDivElement;
        popup.style.display = 'none';
    }

    nameEnter(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            this.props.box.geometry.name = (e.target as HTMLInputElement).value;

            (e.target as HTMLInputElement).value = '';
        }
    }

    // TODO: check if this can be done easier
    sizeEnter(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            let sizeVec = new THREE.Vector3(0, 0, 0);
            this.props.box.geometry.computeBoundingBox();
            this.props.box.geometry.boundingBox?.getSize(sizeVec);

            const oldSize = sizeVec.x;
            const newSize: number = parseInt((e.target as HTMLInputElement).value);
            
            const scaleValue = newSize/oldSize;
            
            this.props.box.scale.x = scaleValue;
            this.props.box.scale.y = scaleValue;
            this.props.box.scale.z = scaleValue;

            (e.target as HTMLInputElement).value = '';
            this.forceUpdate();
        }
    }

    colorEnter(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            (this.props.box.material as THREE.MeshPhongMaterial).color = new THREE.Color((e.target as HTMLInputElement).value);
            
            (e.target as HTMLInputElement).value = '';
        }
    }

    // TODO: Split into smaller components
    render() {
        let size = this.props.box.scale.x * Box.BOX_SIZE;

        let color = (this.props.box.material as THREE.MeshPhongMaterial).color;

        return  <div className='popup' style={{top: this.props.y, left: this.props.x}}>
                    <span className='close' onClick={this.exit}>x</span>

                    <p id='heading'><strong>Info</strong></p>

                    <label htmlFor='name'>
                        Name: {this.props.box.geometry.name}
                        <br />
                        Enter new name: 
                        <br />
                    </label>
                    <input id='name' name='name' type='text' onKeyDown={this.nameEnter}/>

                    <label htmlFor='size'>
                        Size: {size}
                        <br />
                        Enter new size: 
                        <br />
                    </label>
                    <input id='size' name='size' type='number' onKeyDown={this.sizeEnter}/>

                    <label htmlFor='color'>
                        Color: {color.getHexString()}
                        <br />
                        Enter new color: 
                        <br />
                    </label>
                    <input id='color' color='name' type='text' onKeyDown={this.colorEnter}/>
                </div>;
    }
}

export default Popup;