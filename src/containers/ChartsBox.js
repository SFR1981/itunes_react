import React from 'react';
import SongList from '../components/SongList.js'
import Song from '../components/Song.js'

class ChartsBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      songs: []
    };
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=200/json';
    fetch(url)
    .then((res)=>{
      return res.json();
    })
    .then((songs)=>{
      this.setState({ songs: songs.feed.entry});
    })


  }

  render(){
    return <div>
      <h4>The charts : top 200</h4>
      <SongList songs={this.state.songs}/>
    </div>
  }

}



export default ChartsBox;
