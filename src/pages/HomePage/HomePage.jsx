import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
// import videos from "../../data/video-details.json";
import "./HomePage.scss";
import CurrentVideo from "../../components/CurrentVideo/CurrentVideo";
import MainSection from "../../components/MainSection/MainSection";
import VideoList from "../../components/VideoList/VideoList";

function HomePage() {
  const baseUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
  const apiKey = "6ab3a096-a9af-4480-80df-8f33eec68532";

  const [videosList, setVideosList] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  // useEffect(() => {
  const fetchVideos = async () => {
    try {
      const videosResponse = await axios.get(
        `${baseUrl}videos?api_key=${apiKey}`
      );
      navigate(`/${videosResponse.data[0].id}`);

      // setVideosList(videosResponse.data);
      // setCurrentVideo(videosResponse.data[0]);
      // console.log(videosList);
      // console.log(currentVideo);
    } catch (error) {
      console.error(error);
    }
  };
  // fetchVideos();
  // }, []);

  // useEffect(() => {
  const fetchVideoDetails = async () => {
    try {
      const detailsResponse = await axios.get(
        `${baseUrl}videos/${id}?api_key=${apiKey}`
      );
      const allVideosResponse = await axios.get(
        `${baseUrl}videos?api_key=${apiKey}`
      );
      setCurrentVideo(detailsResponse.data);
      setVideosList(allVideosResponse.data);
      // console.log(currentVideo);
      // console.log(videosList);
    } catch (error) {
      console.error(error);
    }
  };
  // fetchVideoDetails();
  // }, []);

  useEffect(() => {
    if (id) {
      fetchVideoDetails();
      return;
    }
    fetchVideos();
  }, [id]);

  if (!currentVideo) {
    return <>{/* <p>Give me a minute!</p> */}</>;
  }

  // const [selectedVideo, setSelectedVideo] = useState(
  //   "84e96018-4022-434e-80bf-000ce4cd12b8"
  // );
  // const currentVideoObj = videosList.find((video) => {
  //   video.id === currentVideo;
  //   return currentVideoObj;
  // });
  // console.log(currentVideoObj);

  return (
    <>
      <CurrentVideo currentVideo={currentVideo} />
      <div className="main-container">
        <MainSection currentVideo={currentVideo} />
        <VideoList
          videosList={videosList}
          currentVideo={currentVideo}
          setCurrentVideo={setCurrentVideo}
        />
      </div>
    </>
  );
}

export default HomePage;
