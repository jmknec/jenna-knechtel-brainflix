import "./VideoDetails.scss";

function VideoDetails(props) {
  return (
    <div className="video-details">
      <h1 className="video-details__title">{props.title}</h1>
      <div className="video-details__quick-facts">
        <div className="video-details__creator-details">
          <h2 className="video-details__channel">{props.channel}</h2>
          <p className="video-details__date">{props.date}</p>
        </div>
        <div className="video-details__stats">
          <p className="video-details__view-count">{props.views}</p>
          <p className="video-details__like-count">{props.likes}</p>
        </div>
      </div>
      <p className="video-details__description">{props.description}</p>
      <p className="video-details__comment-count">{props.comments}</p>
    </div>
  );
}

export default VideoDetails;
