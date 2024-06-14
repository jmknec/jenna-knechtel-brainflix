import "./Comment.scss";
import Avatar from "../Avatar/Avatar";

function Comment(props) {
  const { name, comment, timestamp } = props;
  const date = new Date(timestamp);

  return (
    <div className="comment">
      <Avatar
        className="comment__avatar"
        altText="Side profile of comment author"
      />
      <div className="comment__content">
        <div className="comment__identifiers">
          <h3 className="comment__username">{name}</h3>
          <p className="comment__date">{date.toLocaleDateString()}</p>
        </div>
        <p className="comment__text">{comment}</p>
      </div>
    </div>
  );
}

export default Comment;
