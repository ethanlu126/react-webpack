import React from 'react';

export class Movie extends React.Component {
    render() {
        return <div>
            Top Rated Movies : <br/>
            1.{this.props.first} <br/>
            2.{this.props.second} <br/>
            3.{this.props.third}
        </div>
    }
}
