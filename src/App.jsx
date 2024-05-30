import { useState } from "react";
import videos from "./data/video-details.json";
import "./App.scss";
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoList from "./components/VideoList/VideoList";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );
  const selectedVideoObj = videos.find((video) => {
    return video.id === selectedVideo;
  });
  // console.log(selectedVideoObj);

  return (
    <>
      <Header />
      <VideoPlayer selectedVideoObj={selectedVideoObj} />
      <MainSection />
      <VideoList
        selectedVideo={selectedVideo}
        setSelectedVideo={setSelectedVideo}
      />
    </>
  );
}

export default App;
