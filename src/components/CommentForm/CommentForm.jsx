import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./CommentForm.scss";
import Avatar from "../Avatar/Avatar";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

function CommentForm() {
  const baseUrl = import.meta.env.VITE_API_URL;
  const [comment, setComment] = useState("");
  const { id } = useParams();

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const sendCommentObj = async (commentObj) => {
    try {
      const commentRes = await axios.post(`${baseUrl}/videos/${id}/comments`);
      return commentRes;
    } catch (error) {
      console.error(error);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const commentData = { comment };

    sendCommentObj(commentData);
  };

  return (
    <form className="comment-form" onSubmit={submitHandler}>
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
          type="submit"
        />
      </div>
    </form>
  );
}

export default CommentForm;
