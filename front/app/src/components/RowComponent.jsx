import React from 'react';
import Square from './SquareComponent';

const rowStyle = {
    display: 'flex',
    justifyContent: 'space-evenly'
}

const row = (props) => {
    const rowNum = `${props.rowNum}`;
    return <div style={rowStyle}>
        <Square number={1 + '-' +rowNum}/>
        <Square number={2 + '-' +rowNum}/>
        <Square number={3 + '-' +rowNum}/>
    </div>
}

export default row; 