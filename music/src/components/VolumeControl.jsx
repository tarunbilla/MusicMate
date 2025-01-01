import React from "react";

const VolumeControl = ({ volume, handleVolumeChange }) => {
  const volumePercentage = (volume * 100).toFixed(0);

  let iconTitle = "";
  let iconClass = "";
  if (volumePercentage == 0) {
    iconClass = "fa-solid fa-volume-off";
    iconTitle = "Mute";
  } else if (volumePercentage <= 50) {
    iconClass = "fa-solid fa-volume-low";
    iconTitle = "Low Volume";
  } else {
    iconClass = "fa-solid fa-volume-high";
    iconTitle = "High Volume";
  }

  return (
    <div className="volume-control-container ">
      <i className={iconClass} title={iconTitle}></i>
      <input
        type="range"
        className="volume-slider"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={handleVolumeChange}
        title={`${volumePercentage}%`}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default VolumeControl;
