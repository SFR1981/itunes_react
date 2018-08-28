import React from 'react';
import Song from './Song.js'

class SongList extends React.Component {
  render(){
    console.log(this.props.songs);
    const songs = this.props.songs.map((song)=>{
      console.log(song);
      return (<Song
        title = {song.title.label}
        key ={Date.now()}
        image = {song["im:image"]}
        >
      </Song>);
    })


 return (
   <ul>
     {songs}
   </ul>

 )





}
}




export default SongList;
