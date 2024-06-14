import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./UploadForm.scss";
import TextInput from "../TextInput/TextInput";
import Button from "../../components/Button/Button";
import Publish from "../../assets/icons/publish.svg";

function UploadForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const baseUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const sendVideoObj = async (videoObj) => {
    try {
      const sendResponse = await axios.post(`${baseUrl}/videos`, videoObj);
      return sendResponse;
    } catch (error) {
      console.error(error);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = { title, description };

    sendVideoObj(formData);
    alert(
      "Your video has been uploaded! You will now be redirected to the Home Page."
    );
    setTimeout(() => {
      navigate("/");
    }, 200);
  };

  return (
    <>
      <form className="upload-form" onSubmit={submitHandler}>
        <div className="upload-form__inputs">
          <div className="upload-form__input-container">
            <label className="upload-form__label" htmlFor="title">
              Title your video
            </label>
            <input
              className="upload-form__input"
              id="title"
              name="title-input"
              type="text"
              placeholder="Add a title to your video"
              onChange={handleTitleChange}
              value={title}
            />
          </div>
          <div className="upload-form__input-container">
            <label className="upload-form__label" htmlFor="description">
              Add a video description
            </label>
            <TextInput
              className="upload-form__input"
              id="description"
              name="description-input"
              placeholder="Add a description to your video"
              onChange={handleDescriptionChange}
              value={description}
            />
          </div>
        </div>
        <div className="upload__click-container">
          <Button
            className="upload__publish button"
            btnLabel="Publish"
            icon={Publish}
            iconClass="upload__publish-icon"
            type="submit"
          />
          <Link className="upload__nav-link" to="/">
            <h2 className="upload__cancel">Cancel</h2>
          </Link>
        </div>
      </form>
    </>
  );
}

export default UploadForm;
