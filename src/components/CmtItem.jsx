import React from 'react';

export default function CmtItem(props) {
    return <div>
        <h5>user: {props.user}</h5>
        <h6>content: {props.content}</h6>
    </div>
}