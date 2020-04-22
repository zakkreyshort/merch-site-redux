import React from 'react';
import Header from './Header.js';
import ItemControl from './ItemControl.js';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <div className="storeFront">
        <ItemControl/>
      </div>
    </React.Fragment>
  )
}

export default App;