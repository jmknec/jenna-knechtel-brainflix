import "./MainSection.scss";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import VideoDetails from "../VideoDetails/VideoDetails";

function MainSection() {
  return (
    <main className="main">
      <VideoPlayer />
      <VideoDetails
        title="The Future of Artificial Intelligence"
        description="Explore the cutting-edge developments and predictions for Artificial Intelligence in the coming years. From revolutionary breakthroughs in machine learning to the ethical considerations influencing AI advancements, this exploration transcends the boundaries of mere speculation. Join us on a journey that navigates the intricate interplay between innovation, ethics, and the ever-evolving tech frontier."
        comments="3 Comments"
      />
    </main>
  );
}

export default MainSection;
