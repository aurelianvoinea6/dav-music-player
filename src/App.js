import React, { useState, useRef } from 'react';
//Adding Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from './components/Library';
import Nav from './components/Nav';
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
  const [songInfo, setSongInfo] =useState({
    currentTime: 0,
    duration: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
   const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...songInfo, currentTime: current, duration});
  };
  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong}/>
      <Player setSongInfo={setSongInfo} 
      songInfo={songInfo} 
      audioRef={audioRef} 
      setIsPlaying={setIsPlaying} 
      isPlaying={isPlaying}
      currentSong={currentSong}
      songs={songs}
      setCurrentSong= {setCurrentSong} />
      <Library 
      audioRef={audioRef} 
      songs={songs} 
      setCurrentSong={setCurrentSong} 
      isPlaying={isPlaying} 
      setSongs={setSongs}
      libraryStatus={libraryStatus}/>
      <audio onTimeUpdate={timeUpdateHandler} 
      onLoadedMetadata={timeUpdateHandler} 
      ref={audioRef} 
      src={currentSong.audio}>
      </audio>
    </div>
  );
}

export default App;
