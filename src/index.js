// console.log("aaabb");

import React from 'react';
import ReactDOM from 'react-dom';

// const testdiv = <div id="test" title="testdiv">axacacaca</div>
//P20
const language = ['js', 'ts', 'c#', 'c++'];
//
const learningOBJ = {
    frontend: 'react',
    pack: 'webpack'
}
function LEARNING(props) {
    console.log(props);
    return <div id="LEARNING">LEARNING frontend: {props.frontend} pack: {props.pack}</div>
}

ReactDOM.render(
    <div id="test" title="test title">
        {/* {
            language.map(item => {
                return <h3 key={language.indexOf(item)}>{item}</h3>
            })
        } */}
        <LEARNING frontend={learningOBJ.frontend} pack={learningOBJ.pack}></LEARNING>
    </div>,
    document.getElementById('app'));