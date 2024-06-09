import "./Video.scss";

function Video(props) {
  const { title, channel, image } = props.video;

  return (
    <div className="video">
      <img className="video__thumbnail" src={image} />
      <div className="video__details">
        <h2 className="video__title">{title}</h2>
        <p className="video__channel">{channel}</p>
      </div>
    </div>
  );
}

export default Video;
