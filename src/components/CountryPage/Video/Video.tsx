import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
// @ts-ignore
import { gapi } from "gapi-script";

export default function Video() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [videos, setVideos] = useState("");

  const arrSearch = {
    part: [
      "snippet",
    ],
    maxResults: 5,
    q: "Paris attractions",
  };

  const videoOpts = {
    height: "390",
    width: "640",
  };

  return (
    <>
        
    </>
  );
}
