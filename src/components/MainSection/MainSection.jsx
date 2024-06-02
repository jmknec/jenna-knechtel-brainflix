import "./MainSection.scss";
import VideoDetails from "../VideoDetails/VideoDetails";
import CommentForm from "../CommentForm/CommentForm";
import CommentSection from "../CommentSection/CommentSection";
import VideoList from "../VideoList/VideoList";

function MainSection(props) {
  const { title, description, comments, channel, timestamp, views, likes } =
    props.selectedVideoObj;

  return (
    <main className="main">
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
    </main>
  );
}

export default MainSection;
