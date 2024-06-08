import "./CurrentVideo.scss";

function CurrentVideo(props) {
  const { video, image } = props.currentVideoObj;
  return (
    <div className="current-video">
      <video className="current-video__player" controls poster={image}>
        <source src={video} />
      </video>
    </div>
  );
}

export default CurrentVideo;
