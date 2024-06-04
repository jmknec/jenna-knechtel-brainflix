import { Link } from "react-router-dom";
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
          className="upload-form__title"
          id="title"
          name="title-input"
          type="text"
          placeholder="Add a title to your video"
        />
        <label className="upload-form__label" htmlFor="description">
          Add a video description
        </label>
        <textarea
          className="upload-form__description"
          name="description-input"
          id="description"
        ></textarea>
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
