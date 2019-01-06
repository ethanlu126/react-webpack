import React from 'react';

export class CmtList extends React.Component {
    constructor() {
        super()
        this.state = {
            ComentList: [
                { id: 1, user: 'Tom', content: 'Hi' },
                { id: 2, user: 'Jerry', content: 'Hello' },
                { id: 3, user: 'Jack', content: 'whats up' },
                { id: 4, user: 'Marry', content: 'hows going' },
            ]
        };
    }

    render() {
        return <div>
            <h1> Chat Room </h1>
            {this.state.ComentList.map(item => <CmtItem {...item} key={item.id}></CmtItem>)}
        </div>
    }
}

function CmtItem(props) {
    return <div key={props.id}>
        <h5>user: {props.user}</h5>
        <h6>content: {props.content}</h6>
    </div>
}