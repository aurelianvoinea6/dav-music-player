import React, { useState, useRef } from 'react';
//Adding Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from './components/Library';
//import styles
import './styles/app.scss'
//import util
import data from './util';



function App() {
  //ref
    const audioRef = useRef(null);

  //state
  const[songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player aurioRef={audioRef} setIsPlaying={setIsPlaying} isPlaying={isPlaying} currentSong={currentSong} />
      <Library songs={songs} setCurrentSong={setCurrentSong}/>
       <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
}

export default App;
