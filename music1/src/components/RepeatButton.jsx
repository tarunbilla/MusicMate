import React from "react";

const RepeatButton = ({ repeatMode, onClick }) => {
  const repeatIcons = [
    <span className="material-symbols-outlined">block</span>,
    <span className="material-symbols-outlined">repeat_one</span>,
    <span className="material-symbols-outlined">repeat</span>,
  ];

  const repeatTitles = ["No Repeat", "Repeat Song", "Repeat Playlist"];

  return (
    <button
      onClick={onClick}
      className="player-btn repeat"
      title={repeatTitles[repeatMode]}
    >
      {repeatIcons[repeatMode]}
    </button>
  );
};

export default RepeatButton;
