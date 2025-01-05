import React from "react";
import PreviousButton from "./PreviousButton";
import NextButton from "./NextButton";
import PlayPauseButton from "./PlayPauseButton";
import ShuffleButton from "./ShuffleButton";
import RepeatButton from "./RepeatButton";
import VolumeControl from "./VolumeControl";

const PlayerControls = ({
  isPlaying,
  togglePlayPause,
  previous,
  next,
  shuffle,
  toggleShuffle,
  repeatMode,
  toggleRepeat,
  volume,
  handleVolumeChange,
}) => {
  return (
    <div className="musicControllers">
      <PreviousButton onClick={previous} />
      <PlayPauseButton isPlaying={isPlaying} onClick={togglePlayPause} />
      <NextButton onClick={next} />
      <ShuffleButton shuffle={shuffle} onClick={toggleShuffle} />
      <RepeatButton repeatMode={repeatMode} onClick={toggleRepeat} />
      <VolumeControl volume={volume} handleVolumeChange={handleVolumeChange} />
    </div>
  );
};

export default PlayerControls;
