import "./App.scss";
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoList from "./components/VideoList/VideoList";

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
