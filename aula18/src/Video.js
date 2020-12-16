import React from "react";

function Video({ video, setFrameID }) {
  return (
    <div className="video" onClick={() => setFrameID(video.id.videoId)}>
      <br />
      <img src={video.snippet.thumbnails.default.url} alt="" />
      <span>{video.snippet.title}</span>
    </div>
  );
}

export default Video;
