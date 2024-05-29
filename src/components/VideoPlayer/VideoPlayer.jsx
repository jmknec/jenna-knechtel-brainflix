import "./VideoPlayer.scss";

function VideoPlayer() {
  return (
    <div className="active-video">
      <video
        className="active-video__player"
        controls
        poster="https://unit-3-project-api-0a5620414506.herokuapp.com/images/image0.jpg"
      >
        <source src="https://unit-3-project-api-0a5620414506.herokuapp.com/stream" />
      </video>
    </div>
  );
}

export default VideoPlayer;
