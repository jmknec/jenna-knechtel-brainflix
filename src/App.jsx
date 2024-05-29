import "./App.scss";
import Header from "./components/Header/Header";
import VideoList from "./components/VideoList/VideoList";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

function App() {
  return (
    <>
      <Header />
      <VideoPlayer />
      <VideoList />
    </>
  );
}

export default App;
