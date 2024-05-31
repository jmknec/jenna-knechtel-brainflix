import "./VideoStats.scss";
import Views from "../../assets/icons/views.svg";
import Likes from "../../assets/icons/likes.svg";

function VideoStats(props) {
  const { channel, timestamp, views, likes } = props;
  const date = new Date(timestamp);

  return (
    <div className="video-details__quick-facts">
      <div className="video-details__creator-details">
        <h2 className="video-details__channel">{channel}</h2>
        <p className="video-details__date">{date.toLocaleDateString()}</p>
      </div>
      <div className="video-details__stats">
        <div className="video-details__numbers-container">
          <img className="video-details__icon" src={Views} alt="eye icon" />
          <p className="video-details__numbers">{views}</p>
        </div>
        <div className="video-details__numbers-container">
          <img className="video-details__icon" src={Likes} alt="heart icon" />
          <p className="video-details__numbers">{likes}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoStats;
