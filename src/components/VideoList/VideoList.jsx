import videos from "../../data/video-details.json";
import Video from "../Video/Video";
import "./VideoList.scss";

function VideoList() {
  return (
    <aside className="video-list">
      <h2 className="video-list__heading">Next Videos</h2>
      <div className="video-list__container">
        {videos.map((video) => {
          return (
            <Video
              key={video.id}
              thumbnail={video.image}
              title={video.title}
              channel={video.channel}
            />
          );
        })}
      </div>
    </aside>
  );
}

export default VideoList;
