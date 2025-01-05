import React from "react";

const PreviousButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-0 text-white rounded-full "
      title="Previous Song"
    >
      <i className="fa-solid fa-backward"></i>
    </button>
  );
};

export default PreviousButton;
