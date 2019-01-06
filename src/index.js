// console.log("aaabb");

import React from 'react';
import ReactDOM from 'react-dom';
import { CmtList } from './components/Cmt/CmtList';

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
        <CmtList></CmtList>
    </div>,
    document.getElementById('app'));