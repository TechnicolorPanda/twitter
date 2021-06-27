import './App.css';
import React from 'react';
import Sidebar from './Components/Sidebar';

function App() {

  return (
    <div className="App">
      <div className="App-header">
        <div className = 'col sidebar'>
          <Sidebar/>
        </div>
        <div className = 'col main'>Home</div>
      </div>
    </div>
  );
}

export default App;
