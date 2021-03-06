import React, { useState, useRef } from 'react';
//Adding Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from './components/Library';
import Nav from './components/Nav';
//import styles
import './styles/app.scss'
//import util
import data from './data';



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
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
    const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //calculate percentage 
    const roundedCurrent = Math.round(current);
   const roundedDuration = Math.round(duration);
   const animation = Math.round((roundedCurrent / roundedDuration) * 100);
   
    setSongInfo({...songInfo, 
      currentTime: current, 
      duration, 
      animationPercentage:animation });
  };
  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) =>song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if(isPlaying) audioRef.current.play();
  }
  if (isPlaying) {
    const playPromise = audioRef.current.play();

    if (playPromise !== undefined) {
      playPromise.then((_) => {}).catch((error) => {});
    }
  }
  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song isPlaying={isPlaying} 
      currentSong={currentSong}
      />
      <Player 
        setSongInfo={setSongInfo} 
        songInfo={songInfo} 
        audioRef={audioRef} 
        setIsPlaying={setIsPlaying} 
        isPlaying={isPlaying}
        currentSong={currentSong}
        songs={songs}
        setCurrentSong= {setCurrentSong}
        setSongs={setSongs} 
      />
      <Library 
        audioRef={audioRef} 
        songs={songs} 
        setCurrentSong={setCurrentSong} 
        isPlaying={isPlaying} 
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio 
        onTimeUpdate={timeUpdateHandler} 
        onLoadedMetadata={timeUpdateHandler} 
        ref={audioRef} 
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
}

export default App;
