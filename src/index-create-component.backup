// console.log("aaabb");

import React from 'react';
import ReactDOM from 'react-dom';
import LEARNING from './components/learning';
import { Movie } from './components/Movie';

// const testdiv = <div id="test" title="testdiv">axacacaca</div>
//P20
const language = ['js', 'ts', 'c#', 'c++'];
//
const learningOBJ = {
    frontend: 'react',
    pack: 'webpack'
}

const topRatedMovies = {
    first: 'The Shawshank Redemption',
    second: 'The Godfather',
    third: 'The Godfather:Part II'
}


ReactDOM.render(
    <div id="test" title="test title">
        {/* {
            language.map(item => {
                return <h3 key={language.indexOf(item)}>{item}</h3>
            })
        } */}
        {/* <LEARNING frontend={learningOBJ.frontend} pack={learningOBJ.pack}></LEARNING> */}
        <LEARNING {...learningOBJ}></LEARNING>
        <hr/>
        <Movie {...topRatedMovies}></Movie>
    </div>,
    document.getElementById('app'));