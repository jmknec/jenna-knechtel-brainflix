import "./CommentForm.scss";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import Image from "../../assets/images/Mohan-muruge.jpg";

function CommentForm() {
  return (
    <form className="comment-form" action="">
      <div className="comment-form__avatar-container">
        <Avatar
          className="comment-form__avatar"
          image={Image}
          alt="User profile picture"
        />
      </div>
      <div className="comment-form__content">
        <div className="comment-form__input-container">
          <label className="comment-form__label" htmlFor="form-comment">
            Join the conversation
          </label>
          <textarea
            className="comment-form__input"
            name="comment"
            id="form-comment"
            type="text"
            placeholder="Add a new comment"
          ></textarea>
        </div>
        <Button
          className="comment-form__button"
          btnLabel="Comment"
          icon="src/assets/icons/add_comment.svg"
          iconClass="comment-form__icon"
          altText="blue addition sign on white text bubble"
        />
      </div>
    </form>
  );
}

export default CommentForm;
