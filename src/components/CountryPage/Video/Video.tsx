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

  function execute() {
    setIsLoading(true);
    return gapi.client.youtube.search.list(arrSearch)
      .then((response: any) => {
        const listItem = response.result.items;
        console.log(listItem);
        if (listItem) {
          const listVideo = listItem.map((item: any) => item.id.videoId);
          console.log(listVideo);
          setIsLoading(false);
          setVideos(listVideo);
        }
        // Handle the results here (response.result has the parsed body).
      },
      (err: Error) => { console.error("Execute error", err); });
  }

  return (
    <>
        
    </>
  );
}
