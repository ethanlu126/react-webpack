import React from 'react';
import CmtItem from './CmtItem';
import CmtListCss from './CmtList.css'
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
            <h1 className={CmtListCss.title}> Chat Room </h1>
            {this.state.ComentList.map(item => <CmtItem {...item} key={item.id}></CmtItem>)}
        </div>
    }
}

