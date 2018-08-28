import React from 'react';

const Song = (props) =>{

console.log("YO",props);
  return (
    <li>

      <h5>{props.title}</h5>

      <img src={props.image[2].label}/>
    </li>
  )
}



export default Song;
