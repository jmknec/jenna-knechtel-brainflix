import "./Video.scss";

function Video(props) {
  const { title, channel, image, timestamp, id } = props.video;
  const { setSelectedVideo } = props;
  const date = new Date(timestamp);

  const clickHandler = () => {
    setSelectedVideo(id);
  };

  return (
    <div className="video" onClick={clickHandler}>
      <img className="video__thumbnail" src={image} />
      <div className="video__details">
        <h2 className="video__title">{title}</h2>
        <p className="video__channel">{channel}</p>
        <p className="video__date">{date.toLocaleDateString()}</p>
      </div>
    </div>
  );
}

export default Video;
