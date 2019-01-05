import React from 'react';

export class Movie extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'IMDb'
        }
    }
    render() {
        return <div>
            Top Rated Movies : <br/>
            1.{this.props.first} <br/>
            2.{this.props.second} <br/>
            3.{this.props.third} <br/>
            from {this.state.title}
        </div>
    }
}
