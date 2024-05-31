import "./CommentSection.scss";
import Comment from "../Comment/Comment";

function CommentSection({ selectedVideoComments }) {
  return (
    <div className="comment-list">
      {selectedVideoComments.map((selectedVideoComment) => {
        return (
          <Comment
            key={selectedVideoComment.id}
            name={selectedVideoComment.name}
            comment={selectedVideoComment.comment}
            timestamp={selectedVideoComment.timestamp}
          />
        );
      })}
    </div>
  );
}

export default CommentSection;
