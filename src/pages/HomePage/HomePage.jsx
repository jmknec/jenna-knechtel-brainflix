import "./HomePage.scss";
import ActiveVideoPlayer from "../../components/ActiveVideoPlayer/ActiveVideoPlayer";
import MainSection from "./components/MainSection/MainSection";
import VideoList from "./components/VideoList/VideoList";

function HomePage() {
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
