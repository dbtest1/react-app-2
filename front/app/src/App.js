import React from 'react';
import BoardComponent from './components/BoardComponent';

import './App.css';

const appStyle = {
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  top: '50%',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center'
}

function App() {
  return (
    <div className="App" style={appStyle}>
      <BoardComponent borderColor={'red'} >
          
      </BoardComponent>
    </div>
  );
}

export default App;
