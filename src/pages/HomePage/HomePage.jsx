import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./HomePage.scss";
import CurrentVideo from "../../components/CurrentVideo/CurrentVideo";
import MainSection from "../../components/MainSection/MainSection";
import VideoList from "../../components/VideoList/VideoList";

function HomePage() {
  const baseUrl = import.meta.env.VITE_API_URL;

  const [videosList, setVideosList] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchVideos = async () => {
    try {
      const videosResponse = await axios.get(`${baseUrl}/videos`);
      navigate(`/${videosResponse.data[0].id}`);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchVideoDetails = async () => {
    try {
      const detailsResponse = await axios.get(`${baseUrl}/videos/${id}`);
      const allVideosResponse = await axios.get(`${baseUrl}/videos`);
      setCurrentVideo(detailsResponse.data);
      setVideosList(allVideosResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchVideoDetails();
      return;
    }
    fetchVideos();
  }, [id]);

  if (!currentVideo) {
    return <></>;
  }

  return (
    <main className="main">
      <CurrentVideo currentVideo={currentVideo} />
      <div className="main__content">
        <MainSection currentVideo={currentVideo} />
        <VideoList
          videosList={videosList}
          currentVideo={currentVideo}
          setCurrentVideo={setCurrentVideo}
        />
      </div>
    </main>
  );
}

export default HomePage;
