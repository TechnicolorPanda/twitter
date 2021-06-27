import React, { useState, useEffect } from 'react';
import bird from '../Assets/bird.png';
import '../styles/sidebar.css';

const Sidebar = () => {

  return (
    <div>
     <img src = {bird} id = 'bird' alt = 'blue twitter bird'/>   
    </div>
  )

}

export default Sidebar;