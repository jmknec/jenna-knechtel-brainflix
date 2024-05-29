import "./MainSection.scss";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import VideoDetails from "../VideoDetails/VideoDetails";

function MainSection() {
  return (
    <main className="main">
      <VideoPlayer />
      <VideoDetails />
    </main>
  );
}

export default MainSection;
