import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import videos from "../../data/video-details.json";
import "./HomePage.scss";
// import ActiveVideoPlayer from "../../components/ActiveVideoPlayer/ActiveVideoPlayer";
// import MainSection from "../../components/MainSection/MainSection";
// import VideoList from "../../components/VideoList/VideoList";

function HomePage() {
  const baseUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
  const apiKey = "6ab3a096-a9af-4480-80df-8f33eec68532";

  const [videosList, setVideosList] = useState([]);
  const [videoDetails, setVideoDetails] = useState(null);
  const { id } = useParams();

  // useEffect(() => {
  const fetchVideos = async () => {
    try {
      const videosResponse = await axios.get(
        `${baseUrl}videos?api_key=${apiKey}`
      );
      setVideosList(videosResponse.data);
      console.log(videosList);
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
      setVideoDetails(detailsResponse.data);
      console.log(videoDetails);
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
  }, []);

  // const [selectedVideo, setSelectedVideo] = useState(
  //   "84e96018-4022-434e-80bf-000ce4cd12b8"
  // );
  // const selectedVideoObj = videos.find((video) => {
  //   return video.id === selectedVideo;
  // });

  return (
    <>
      {/* <ActiveVideoPlayer selectedVideoObj={selectedVideoObj} /> */}
      {/* <div className="main-container">
        <MainSection
          selectedVideo={selectedVideo}
          selectedVideoObj={selectedVideoObj}
        />
        <VideoList
          selectedVideo={selectedVideo}
          setSelectedVideo={setSelectedVideo}
        />
      </div> */}
    </>
  );
}

export default HomePage;
