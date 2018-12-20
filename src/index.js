// console.log("aaabb");

import React from 'react';
import ReactDOM from 'react-dom';

// const testdiv = <div id="test" title="testdiv">axacacaca</div>


const language = ['js', 'ts', 'c#', 'c++'];


ReactDOM.render(
    <div id="test" title="test title">
        {
            language.map(item => {
                return <h1>{item}</h1>
            })
        }
    </div>,
    document.getElementById('app'));