// console.log("aaabb");

import React from 'react';
import ReactDOM from 'react-dom';
import { CmtList } from './components/Cmt/CmtList';
import BindEvent from './components/Cmt/BindEvent'

import TodoList from './components/TodoList/TodoList'

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
        {/* <CmtList>
        </CmtList>
        <BindEvent></BindEvent> */}
        
        <TodoList></TodoList>

    </div>,
    document.getElementById('app'));