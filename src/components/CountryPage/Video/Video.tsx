import React from "react";
import YouTube from "react-youtube";
// @ts-ignore
/* import { gapi } from "gapi-script"; */
import "./VideoStyles.scss";

export default function Video({ videoId }) {
  const videoOpts = {
    height: "390",
    width: "640",
  };

  function onReady(event: any) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  return (
    <>
      <div className="videoBlock">
        <YouTube videoId={videoId} opts={videoOpts} onReady={onReady} />
      </div>

    </>
  );
}
