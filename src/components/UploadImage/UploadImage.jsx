import "./UploadImage.scss";

function UploadImage() {
  return (
    <>
      <div className="upload__image-container">
        <h2 className="upload__image-heading">Video Thumbnail</h2>
        <img
          className="upload__image"
          src="http://localhost:8080/images/image9.jpg"
          alt="Lower body of relay runner in starting position"
        />
      </div>
    </>
  );
}

export default UploadImage;
