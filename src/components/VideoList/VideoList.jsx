import { Link } from "react-router-dom";
import "./VideoList.scss";
import Video from "../Video/Video";

function VideoList(props) {
  const { videosList, currentVideo, setCurrentVideo } = props;

  return (
    <aside className="video-list">
      <h2 className="video-list__heading">Next Videos</h2>
      <div className="video-list__container">
        {videosList
          .filter((video) => {
            return video.id !== currentVideo.id;
          })
          .map((video) => {
            return (
              <Link
                className="video-list__link"
                to={`/${video.id}`}
                key={video.id}
              >
                <Video
                  video={video}
                  title={video.title}
                  channel={video.channel}
                  image={video.image}
                  alt={video.alt}
                  setCurrentVideo={setCurrentVideo}
                />
              </Link>
            );
          })}
      </div>
    </aside>
  );
}

export default VideoList;
