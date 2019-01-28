import React from 'react'

export default class BindEvent extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: 'waiting'
        }
    }

    render() {
        return <div>
            <button onClick={() => this.clickEvent(this.state.msg)}>
                <h5>{this.state.msg}</h5>
            </button>
        </div>
    }

    clickEvent(args) {
        this.setState({
            msg: 'clicked!'
        });
        


        setTimeout(() => {
            this.setState({
                msg: 'waiting'
            })
        }, 1000);
    }
}