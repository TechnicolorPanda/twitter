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
    <div className = 'sidebar'>
     <div id = 'bird'><img src = {bird} id = 'bird' alt = 'blue twitter bird'/></div>
     <div id = 'home'><img src = {house} id = 'house' alt = 'blue house' onClick = {onClickHouse}/>Home  </div>
     <div id = 'explore'><img src = {hashtag} id = 'hashtag' alt = 'hashtag' onClick = {onClickHashtag}/>Explore  </div>
     <div id = 'notifications'><img src = {bell} id = 'bell' alt = 'bell' onClick = {onClickBell}/>Notifications  </div>
     <div id = 'messages'><img src = {envelope} id = 'envelope' alt = 'envelope' onClick = {onClickEnvelope}/>Messages  </div>
    </div>
  )

}

export default Sidebar;