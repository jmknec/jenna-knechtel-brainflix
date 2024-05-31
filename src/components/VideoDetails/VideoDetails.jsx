import "./VideoDetails.scss";
import VideoStats from "../VideoStats/VideoStats";

function VideoDetails(props) {
  const { title, description, comments, channel, timestamp, views, likes } =
    props;

  return (
    <div className="video-details">
      <h1 className="video-details__title">{title}</h1>
      <VideoStats
        channel={channel}
        timestamp={timestamp}
        views={views}
        likes={likes}
      />
      <p className="video-details__description">{description}</p>
      <p className="video-details__comment-count">{comments} Comments</p>
    </div>
  );
}

export default VideoDetails;
