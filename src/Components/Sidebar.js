import React from 'react';
import bird from '../Assets/bird.png';
import house from '../Assets/home.png';
import hashtag from '../Assets/hashtag.png';
import bell from '../Assets/bell.png';
import envelope from '../Assets/envelope.png';
import '../styles/sidebar.css';


const Sidebar = () => {

  function onClickHouse() {
    console.log('home');
  }

  function onClickHashtag() {
    console.log('hashtag');
  }

  function onClickBell() {
    console.log('bell');
  }

  function onClickEnvelope() {
    console.log('envelope');
  }

  return (
    <div>
     <img src = {bird} id = 'bird' alt = 'blue twitter bird'/>
     <img src = {house} id = 'house' alt = 'blue house' onClick = {onClickHouse}/>
     <img src = {hashtag} id = 'hashtag' alt = 'hashtag' onClick = {onClickHashtag}/>
     <img src = {bell} id = 'bell' alt = 'bell' onClick = {onClickBell}/>
     <img src = {envelope} id = 'envelope' alt = 'envelope' onClick = {onClickEnvelope}/>
    </div>
  )

}

export default Sidebar;