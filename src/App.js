import './App.css';
import React from 'react';
import Sidebar from './Components/Sidebar';
import Main from './Components/Main';

function App() {

  return (
    <div className="App">
      <div className="App-header">
        <div className = 'col sidebar'>
          <Sidebar/>
        </div>
        <div className = 'col main'>
          <Main/>
        </div>
      </div>
    </div>
  );
}

export default App;
