import React from "react";

const BackGroundVideo = ({ video }) => {
  return (
    <div
      className="bg-video"
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        zIndex: -1,
        objectFit: "cover",
        // overflow: "hidden",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        src={video}
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          filter: "blur(1px)",
        }}
      ></video>
    </div>
  );
};

export default BackGroundVideo;
