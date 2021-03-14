import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
// @ts-ignore
import { gapi } from "gapi-script";

export default function Video() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [videos, setVideos] = useState("");
  const [country, setCountry] = useState("Paris");

  const arrSearch = {
    part: [
      "snippet",
    ],
    maxResults: 5,
    q: `${country} attractions`,
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

  useEffect(() => {
    const getData = async () => {
      function loadClient() {
        gapi.client.setApiKey("AIzaSyAoldSYu2-e9-GINmaH0t7DaP0MI4sAGno");
        return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
          .then(() => {
            console.log("GAPI client loaded for API");
            execute();
          },
          (err: Error) => { console.error("Error loading GAPI client for API", err); });
      }

      setIsLoading(true);
      try {
        gapi.load("client", loadClient);
        // setVideos(response.data.name);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  function onReady(event: any) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  return (
    <>
        {isLoading ? "Loading" : <YouTube videoId={videos[1]} opts={videoOpts} onReady={onReady} />}
    </>
  );
}
