import "./VideoStats.scss";

function VideoStats({ channel, date, views, likes }) {
  return (
    <div className="video-details__quick-facts">
      <div className="video-details__creator-details">
        <h2 className="video-details__channel">{channel}</h2>
        <p className="video-details__date">{date}</p>
      </div>
      <div className="video-details__stats">
        <p className="video-details__view-count">{views}</p>
        <p className="video-details__like-count">{likes}</p>
      </div>
    </div>
  );
}

export default VideoStats;