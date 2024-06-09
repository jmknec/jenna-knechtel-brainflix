import "./UploadImage.scss";

function UploadImage() {
  return (
    <>
      <div className="upload__image-container">
        <h2 className="upload__image-heading">Video Thumbnail</h2>
        <img
          className="upload__image"
          src="src/assets/images/Upload-video-preview.jpg"
          alt="Lower body of relay runner in starting position"
        />
      </div>
    </>
  );
}

export default UploadImage;
