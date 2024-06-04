import "./UploadImage.scss";

function UploadImage({ image }) {
  return (
    <>
      <div className="upload__image-container">
        <h2 className="upload__image-heading">Video Thumbnail</h2>
        <img className="upload__image" src={image} alt="" />
      </div>
    </>
  );
}

export default UploadImage;
