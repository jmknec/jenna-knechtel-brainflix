import "./MainSection.scss";
import VideoDetails from "../VideoDetails/VideoDetails";
import CommentForm from "../CommentForm/CommentForm";
import CommentSection from "../CommentSection/CommentSection";

function MainSection(props) {
  const {
    title,
    description,
    comments,
    channel,
    timestamp,
    views,
    likes,
    // selectedVideo,
    // selectedVideoObj,
  } = props.selectedVideoObj;
  // const { selectedVideoObj } = selectedVideoObj;
  // console.log(props);

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
        // selectedVideoObj={selectedVideoObj}
      />
      <CommentForm />
      <CommentSection
        // selectedVideo={selectedVideo}
        selectedVideoComments={comments}
      />
    </main>
  );
}

export default MainSection;
