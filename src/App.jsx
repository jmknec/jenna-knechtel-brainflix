import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import videos from "./data/video-details.json";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import Header from "./components/Header/Header";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );
  const selectedVideoObj = videos.find((video) => {
    return video.id === selectedVideo;
  });

  return (
    <BrowserRouter>
      {/* <div className="app-container"> */}
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="upload" element={<UploadPage />} />
      </Routes>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
