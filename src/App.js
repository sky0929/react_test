import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import video1 from "./assets/video/video1.mp4";
import video2 from "./assets/video/video2.mp4";
import video3 from "./assets/video/video3.mp4";
import video4 from "./assets/video/video4.mp4";

import image1 from "./assets/image/image1.jpg";
import image2 from "./assets/image/image2.jpg";
import image3 from "./assets/image/image3.jpg";
import image4 from "./assets/image/image4.jpg";

const videoData = [
  { type: "video", src: video1 },
  { type: "image", src: image1 },
  { type: "video", src: video2 },
  { type: "image", src: image2 },
  { type: "video", src: video3 },
  { type: "image", src: image3 },
  { type: "video", src: video4 },
  { type: "image", src: image4 },
];

function App() {
  let vCount = 1;
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    let video_len = document.getElementsByTagName("video").length;

    for (let i = 1; i <= video_len; i++) {
      let video_object = document.getElementById(`v${i}`);
      let video_Y_Pos = video_object.getBoundingClientRect().y;
      let video_height = video_object.getBoundingClientRect().height;
      let window_height = window.innerHeight;

      if (
        video_Y_Pos + (video_height * 2) / 3 < window_height &&
        video_Y_Pos + video_height / 3 > 0
      ) {
        video_object.play();
      } else {
        video_object.pause();
      }
    }
  };

  return (
    <div className="App">
      {videoData.map((value, key) => (
        <div key={key}>
          {value.type === "image" && (
            <img src={value.src} className="App-logo" alt="" />
          )}
          {value.type === "video" && (
            <video
              autoPlay
              loop
              controls
              muted
              id={"v" + vCount++}
              className="videoPlayer"
            >
              <source src={value.src} type="video/mp4" />
            </video>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
