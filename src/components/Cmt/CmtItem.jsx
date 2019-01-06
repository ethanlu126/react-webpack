import React from 'react';
import CmtItemCss from './CmtItem.css'

export default function CmtItem(props) {
    return <div id={CmtItemCss.itemBox}>
        <p className={CmtItemCss.title}>user: {props.user}</p>
        <p className={CmtItemCss.content}>content: {props.content}</p>
    </div>
}

// export default function CmtItem(props) {
//     return <div style= { {border : '1px dashed #ccc' , margin: '10px', padding: '10px', boxShadow: '0 0 10px #ccc' } }>
//         <h5 style= { {fontSize: '10px'} }>user: {props.user}</h5>
//         <h6>content: {props.content}</h6>
//     </div>
// }