import React from "react";

const NextButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-0 text-white rounded-full "
      title="Next Song"
    >
      <i className="fa-solid fa-forward"></i>
    </button>
  );
};

export default NextButton;
