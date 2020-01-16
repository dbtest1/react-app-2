import React from 'react';

const squareStyle = {
    height: '6em',
    width: '6em',
    border: '1px solid blue'
}

const SquareComponent = (props) => {

    const num = `${props.number}`;
    return <div style={squareStyle}>Square - {num}</div>

}

export default SquareComponent;