import React from "react";

function VerVideo({ id }) {
  return (
    <div className="frame">
      <iframe
        title={id}
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VerVideo;
