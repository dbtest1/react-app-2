import React from 'react';

const squareStyle = {
    height: '6em',
    width: '6em',
    border: '1px solid blue'
}

function userCharacterInput(squareInfo) {
    console.log(`square ${squareInfo} was clicked!`)
}


const SquareComponent = (props) => {

    const num = `${props.number}`;
    return (
        <div style={squareStyle} 
            onClick={() => userCharacterInput(num)}
        >
            {num}
        </div>)

}

export default SquareComponent;