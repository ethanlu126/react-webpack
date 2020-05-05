import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import Unity, { UnityContent } from "react-unity-webgl";


export class App extends React.Component {
    constructor(props) {
        super(props);
        this.unityContent = new UnityContent(
            "./src/MyGame/release.json",
            "./src/MyGame/UnityLoader.js",
            {
                adjustOnWindowResize: true
            }
        );
    }

    btn_onclick() {
        this.unityContent.send("Cube", "RotateCube");
    }

    render() {
        return <div>
            <Unity unityContent={this.unityContent} />
            {
                <div className={'rotate_btn'} onPointerDown={this.btn_onclick.bind(this)} />
            }
        </div>;
    }
}


ReactDOM.render(
    <div id="test" title="test title">
        <App></App>
    </div>,
    document.getElementById('app'));