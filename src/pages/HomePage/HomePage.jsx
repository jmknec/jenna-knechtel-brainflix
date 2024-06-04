import { useState } from "react";
import videos from "../../data/video-details.json";
import "./HomePage.scss";
import ActiveVideoPlayer from "../../components/ActiveVideoPlayer/ActiveVideoPlayer";
import MainSection from "../../components/MainSection/MainSection";
import VideoList from "../../components/VideoList/VideoList";

function HomePage() {
  const [selectedVideo, setSelectedVideo] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );
  const selectedVideoObj = videos.find((video) => {
    return video.id === selectedVideo;
  });

  return (
    <>
      <ActiveVideoPlayer selectedVideoObj={selectedVideoObj} />
      <div className="main-container">
        <MainSection
          selectedVideo={selectedVideo}
          selectedVideoObj={selectedVideoObj}
        />
        <VideoList
          selectedVideo={selectedVideo}
          setSelectedVideo={setSelectedVideo}
        />
      </div>
    </>
  );
}

export default HomePage;
