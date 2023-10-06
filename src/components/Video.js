"use client";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const Video = ({ url }) => {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setloading(false);
  }, []);

  return loading ? null : (
    <div className="brand-video-wrapper">
      <ReactPlayer url={url} />
    </div>
  );
};

export default Video;
