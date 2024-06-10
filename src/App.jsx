import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import axios from "axios";

function App() {
  const baseUrl = import.meta.env.VITE_API_URL;
  console.log(baseUrl);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const result = await axios.get(`${baseUrl}/videos`);
        console.log(result.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideos();
  });

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<HomePage />} />
          <Route path="upload" element={<UploadPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
