import "./CommentForm.scss";
import Avatar from "../Avatar/Avatar";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

function CommentForm() {
  return (
    <form className="comment-form">
      <div className="comment-form__avatar-container">
        <Avatar
          className="comment-form__avatar"
          image="http://localhost:8080/images/Mohan-muruge.jpg"
          altText="Side profile of default user Mohan Muruge"
        />
      </div>
      <div className="comment-form__content">
        <div className="comment-form__input-container">
          <label className="comment-form__label" htmlFor="form-comment">
            Join the conversation
          </label>
          <TextInput
            className="comment-form__input"
            id="form-comment"
            name="comment"
            placeholder="Add a new comment"
          />
        </div>
        <Button
          className="comment-form__button button"
          btnLabel="Comment"
          icon="src/assets/icons/add_comment.svg"
          iconClass="comment-form__icon"
          altText="Blue addition sign on white text bubble"
        />
      </div>
    </form>
  );
}

export default CommentForm;
