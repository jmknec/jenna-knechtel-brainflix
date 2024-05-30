import "./ActiveVideoPlayer.scss";

function VideoPlayer(props) {
  const { video, image } = props.selectedVideoObj;
  return (
    <div className="active-video">
      <video className="active-video__player" controls poster={image}>
        <source src={video} />
      </video>
    </div>
  );
}

export default VideoPlayer;
