import React from 'react';
import Square from './SquareComponent';

const rowStyle = {
    display: 'flex',
    justifyContent: 'space-evenly'
}

const row = (props) => {
    const rowNum = `${props.rowNum}`;
    return <div style={rowStyle}>
        <Square number={rowNum * 1}/>
        <Square number={rowNum * 2}/>
        <Square number={rowNum * 3}/>

       
    </div>
}

export default row;