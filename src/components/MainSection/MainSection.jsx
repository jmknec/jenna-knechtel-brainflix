import "./MainSection.scss";
import VideoDetails from "../VideoDetails/VideoDetails";
import CommentForm from "../CommentForm/CommentForm";
import CommentSection from "../CommentSection/CommentSection";

function MainSection(props) {
  const { title, description, comments, channel, timestamp, views, likes } =
    props.currentVideo;

  return (
    <div className="content-container">
      <VideoDetails
        title={title}
        description={description}
        comments={comments.length}
        channel={channel}
        timestamp={timestamp}
        views={views}
        likes={likes}
      />
      <CommentForm />
      <CommentSection selectedVideoComments={comments} />
    </div>
  );
}

export default MainSection;
