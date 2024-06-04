import TextInput from "../TextInput/TextInput";
import "./UploadForm.scss";

function UploadForm() {
  return (
    <>
      <form className="upload-form" action="">
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
          />
        </div>
      </form>
    </>
  );
}

export default UploadForm;
