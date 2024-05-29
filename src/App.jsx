import "./App.scss";
import Header from "./components/Header/Header";
import VideoList from "./components/NextVideos/NextVideos";
import MainSection from "./components/MainSection/MainSection";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

function App() {
  return (
    <>
      <Header />
      <VideoPlayer />
      <MainSection />
      <VideoList />
    </>
  );
}

export default App;
