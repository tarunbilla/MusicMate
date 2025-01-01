import "./output.css";
import { useState, useRef, useEffect } from "react";
import PlayerControls from "./components/PlayerControls";
import ReactPlayer from "react-player";
import SongCover from "./components/SongCover";
import BackGroundVideo from "./components/BackGroundVideo";

import premaluBgm from "./assets/songs/premalu_bgm.mp3";
import rolexBgm from "./assets/songs/rolex_bgm_sound.mp3";
import leoBgm from "./assets/songs/leolapathy_title_card.mp3";

import cover1 from "./assets/images/cover1.jpg";
import cover2 from "./assets/images/cover2.jpg";
import cover3 from "./assets/images/cover3.jpg";

import video1 from "./assets/videos/video1.mp4";
import video2 from "./assets/videos/video2.mp4";
import video3 from "./assets/videos/video3.mp4";

const App = () => {
  const [songs] = useState([
    {
      url: premaluBgm,
      cover: cover1,
      artist: "~~Vishnu Vijay~~",
      song: "*Premalu bgm*",
      video: video1,
    },
    {
      url: rolexBgm,
      cover: cover2,
      artist: "~~Anirudh Ravichander~~",
      song: "*Rolex bgm*",
      video: video2,
    },
    {
      url: leoBgm,
      cover: cover3,
      artist: "~~Anirudh Ravichander~~",
      song: "*Leo Intro bgm*",
      video: video3,
    },
  ]);

  const [isPlaying, setIsPlaying] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [repeatMode, setRepeatMode] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [playedPercentage, setPlayedPercentage] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);

  const playerRef = useRef(null);

  useEffect(() => {
    if (playerRef.current) {
      setTotalDuration(playerRef.current.getDuration());
    }
  }, [currentSongIndex]);

  const shuffleSongs = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      // Fisher-Yates Algorithm
      // The Fisher-Yates Shuffle is an algorithm to generate a random permutation of an array.
      // It ensures that each possible permutation is equally likely (uniformly random).
      // This makes it a gold standard for shuffling. The algorithm works by iteratively swapping elements in the array.
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const toggleShuffle = () => {
    setShuffle(!shuffle);
    console.log("shuffle is clicked");
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    console.log("play/pause is clicked");
  };

  const toggleRepeat = () => {
    setRepeatMode((prev) => (prev + 1) % 3);
    console.log("repeat is clicked");
  };

  const previous = () => {
    console.log("Previous button clicked");
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
  };

  const next = () => {
    console.log("Next button clicked");
    if (shuffle) {
      const shuffledSongs = shuffleSongs(songs);
      const randomIndex = Math.floor(Math.random() * shuffledSongs.length);
      setCurrentSongIndex(randomIndex);
    } else {
      setCurrentSongIndex((prev) => (prev + 1) % songs.length);
    }
  };

  // setIsPlaying(false);
  // setIsPlaying(true);

  // Calling setIsPlaying(false) immediately followed by setIsPlaying(true) isn't necessarily wrong, but it may not behave as expected in React because of how state updates work in batches and how React handles rendering.

  const handleSongEnd = () => {
    if (repeatMode === 1) {
      setIsPlaying(false);
      // setTimeout(() => setIsPlaying(true), 0) is a way to schedule the update of the isPlaying state asynchronously, ensuring that the player is paused first (setIsPlaying(false)) and then immediately restarted (setIsPlaying(true)) in a separate event loop cycle.
      setTimeout(() => setIsPlaying(true), 0);
    } else if (repeatMode === 2) {
      setCurrentSongIndex((prev) => (prev + 1) % songs.length);
    } else {
      if (currentSongIndex < songs.length - 1) next();
      else setIsPlaying(false);
    }
  };

  const handleProgress = (progress) => {
    setPlayedPercentage(progress.played * 100);

    if (!totalDuration && playerRef.current && playerRef.current.getDuration())
      setTotalDuration(playerRef.current.getDuration());
  };

  const handleSeek = (e) => {
    const newTime = (e.target.value / 100) * totalDuration;
    playerRef.current.seekTo(newTime, "seconds");
    setPlayedPercentage(e.target.value);
  };

  const formatSongDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsPart = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, "0")}:${secondsPart
      .toString()
      .padStart(2, "0")}`;
  };

  const handleReady = () => {
    const duration = playerRef.current.getDuration();
    if (!isNaN(duration)) setTotalDuration(duration);
  };

  const handleVolumeChange = (e) => {
    console.log(parseFloat(e.target.value));
    setVolume(parseFloat(e.target.value));
  };

  return (
    <div className="main-container">
      <BackGroundVideo video={songs[currentSongIndex].video} />
      <div className="container">
        <p className="music-Head-Name">{songs[currentSongIndex].artist}</p>
        <p className="music-Song-Name">{songs[currentSongIndex].song}</p>
        <SongCover
          cover={songs[currentSongIndex].cover}
          className="cover-image"
        />

        <ReactPlayer
          ref={playerRef}
          url={songs[currentSongIndex].url}
          playing={isPlaying}
          controls={false}
          onEnded={handleSongEnd}
          onProgress={handleProgress}
          onReady={handleReady}
          volume={volume}
        />

        <div className="progress-bar-container">
          <span className="currrent-song-time">
            {playerRef.current
              ? formatSongDuration(playerRef.current.getCurrentTime())
              : "00:00"}
          </span>
          <input
            type="range"
            className="progress-bar"
            min={0}
            max={100}
            value={playedPercentage}
            onChange={handleSeek}
            style={{ cursor: "pointer" }}
          />

          <span className="total-song-duration">
            {formatSongDuration(totalDuration)}
          </span>
        </div>

        <PlayerControls
          isPlaying={isPlaying}
          togglePlayPause={togglePlayPause}
          previous={previous}
          next={next}
          shuffle={shuffle}
          toggleShuffle={toggleShuffle}
          repeatMode={repeatMode}
          toggleRepeat={toggleRepeat}
          volume={volume}
          handleVolumeChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};

export default App;
