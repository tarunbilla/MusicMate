import React from "react";

const SongCover = ({ cover }) => {
  console.log(cover);
  return (
    <div>
      {/* pb - 56.25 --> padding bottom to maintain a 16:9 aspect ratio */}
      <img src={cover} alt="Song Cover" style={{ opacity: "0.9" }} />
    </div>
  );
};

export default SongCover;
