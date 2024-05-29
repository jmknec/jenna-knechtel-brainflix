import videos from "../../data/video-details.json";

function VideoList() {
  return (
    <div className="video-list">
      {videos.map((video) => (
        <div className="video" key={video.id}>
          <img className="video__thumbnail" src={video.image} />
          <h2 className="video__title">{video.title}</h2>
          <p className="video__channel">{video.channel}</p>
        </div>
      ))}
    </div>
  );
}

export default VideoList;
