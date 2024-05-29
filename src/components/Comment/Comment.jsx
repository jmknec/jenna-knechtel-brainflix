import "./Comment.scss";
import Avatar from "../Avatar/Avatar";

function Comment() {
  return (
    <div className="comment">
      <Avatar />
      <div className="comment__content">
        <h3 className="comment__username"></h3>
        <p className="comment__text"></p>
      </div>
    </div>
  );
}

export default Comment;
