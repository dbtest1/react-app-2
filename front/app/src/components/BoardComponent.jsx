import React from 'react';
import Row from './RowComponent';


const BoardComponent = (props) => {
    return (
        <div style={{border: `1px solid ${props.borderColor}` }}>
            <Row rowNum={1}/>
            <Row rowNum={2}/>
            <Row rowNum={3}/>
        </div>
    )
}

export default BoardComponent;
