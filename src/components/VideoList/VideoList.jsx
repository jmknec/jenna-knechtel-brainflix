import videos from "../../data/video-details.json";
import Video from "../Video/Video";
import "./VideoList.scss";

function VideoList(props) {
  return (
    <aside className="video-list">
      <h2 className="video-list__heading">Next Videos</h2>
      <div className="video-list__container">
        {videos
          .filter((video) => {
            return video.id !== props.selectedVideo;
          })
          .map((video) => {
            return (
              <Video
                key={video.id}
                video={video}
                title={video.title}
                channel={video.channel}
                image={video.image}
                setSelectedVideo={props.setSelectedVideo}
              />
            );
          })}
      </div>
    </aside>
  );
}

export default VideoList;
