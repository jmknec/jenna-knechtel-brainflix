import "./App.scss";
import Header from "./components/Header/Header";
import VideoList from "./components/NextVideos/NextVideos";
import MainSection from "./components/MainSection/MainSection";

function App() {
  return (
    <>
      <Header />
      <MainSection />
      <VideoList />
    </>
  );
}

export default App;
