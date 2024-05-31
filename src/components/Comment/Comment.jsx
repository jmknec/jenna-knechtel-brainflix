import "./Comment.scss";
import Avatar from "../Avatar/Avatar";

function Comment(props) {
  return (
    <div className="comment">
      <Avatar className="comment__avatar" />
      <div className="comment__content">
        <div className="comment__identifiers">
          <h3 className="comment__username">{props.name}</h3>
          <p className="comment__date">Comment Date</p>
        </div>
        <p className="comment__text">Comment Text</p>
      </div>
    </div>
  );
}

export default Comment;
