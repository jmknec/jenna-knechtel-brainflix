import { Link } from "react-router-dom";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import Publish from "../../assets/icons/publish.svg";
import "./UploadForm.scss";

function UploadForm() {
  return (
    <>
      <form className="upload-form" action="">
        <label className="upload-form__label" htmlFor="title">
          Title your video
        </label>
        <input
          className="upload-form__input"
          id="title"
          name="title-input"
          type="text"
          placeholder="Add a title to your video"
        />
        <label className="upload-form__label" htmlFor="description">
          Add a video description
        </label>
        <TextInput
          className="upload-form__input"
          id="description"
          name="description-input"
          placeholder="Add a description to your video"
        />
        <Button
          className="upload-form__publish"
          btnLabel="Publish"
          icon={Publish}
          iconClass="upload-form__publish-icon"
        />
        <Link>
          <h2 className="upload-form__cancel">Cancel</h2>
        </Link>
      </form>
    </>
  );
}

export default UploadForm;
