import "./VideoDetails.scss";
import VideoStats from "../VideoStats/VideoStats";

function VideoDetails({ title, description, comments }) {
  return (
    <div className="video-details">
      <h1 className="video-details__title">{title}</h1>
      <VideoStats />
      <p className="video-details__description">{description}</p>
      <p className="video-details__comment-count">{comments}</p>
    </div>
  );
}

export default VideoDetails;
