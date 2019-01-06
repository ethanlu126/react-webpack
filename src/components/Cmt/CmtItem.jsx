import React from 'react';

export default function CmtItem(props) {
    return <div style= { {border : '1px dashed #ccc' , margin: '10px', padding: '10px', boxShadow: '0 0 10px #ccc' } }>
        <h5 style= { {fontSize: '10px'} }>user: {props.user}</h5>
        <h6>content: {props.content}</h6>
    </div>
}