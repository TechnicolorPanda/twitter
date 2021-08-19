import React, { useState, useEffect } from 'react';
import '../styles/main.css';


const Main = () => {

  const [tweet, setTweet] = useState('What\'s happening?');

  function onSubmitTask() {
    console.log('submit');
  }

  function handleChange() {
    console.log('handle change');
  }

  return (
    <div className = 'main'>
      <h3 id = 'home'>Home</h3>
      <form onSubmit={onSubmitTask}>
        <label htmlFor="input"></label>
        <input
          onChange={handleChange}
          value={tweet}
          type="text"
          id="input"
        />
        <button type="submit" id="tweet">Tweet</button>
      </form>
      </div>
  )

}

export default Main;