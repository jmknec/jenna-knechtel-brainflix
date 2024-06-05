import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";

function App() {
  const baseUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
  const apiKey = "6ab3a096-a9af-4480-80df-8f33eec68532";

  const [videosList, setVideosList] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videosResponse = await axios.get(
          `${baseUrl}videos?api_key=${apiKey}`
        );
        setVideosList(videosResponse.data);
        console.log(videosList);
        console.log(videosList[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchVideos();
  }, []);

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="upload" element={<UploadPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
