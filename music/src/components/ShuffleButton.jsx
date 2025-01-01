import React from "react";

const ShuffleButton = ({ shuffle, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="player-btn big"
      title={shuffle ? "Shuffle is On" : "Shuffle is Off"}
    >
      <i className={`fa-solid ${shuffle ? "fa-random" : "fa-ban"}`}></i>
    </button>
  );
};

export default ShuffleButton;
