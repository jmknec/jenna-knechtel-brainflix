import "./MainSection.scss";
import VideoDetails from "../VideoDetails/VideoDetails";
import CommentForm from "../CommentForm/CommentForm";
import CommentSection from "../CommentSection/CommentSection";

function MainSection(props) {
  const { title, description } = props.selectedVideoObj;
  return (
    <main className="main">
      <VideoDetails
        title={title}
        description={description}
        // comments={comments}
      />
      <CommentForm />
      <CommentSection />
    </main>
  );
}

export default MainSection;
