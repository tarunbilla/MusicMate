import React from "react";

const PlayPauseButton = ({ isPlaying, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="player-btn big"
      title={isPlaying ? "Pause" : "Play"}
    >
      <i
        className={`fa-regular ${
          isPlaying ? "fa-circle-pause" : "fa-circle-play"
        }`}
      ></i>
    </button>
  );
};

export default PlayPauseButton;
