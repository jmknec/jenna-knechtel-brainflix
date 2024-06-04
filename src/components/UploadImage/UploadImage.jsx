import "./UploadImage.scss";

function UploadImage({ image }) {
  return (
    <>
      <h2 className="upload__image-heading">Video Thumbnail</h2>
      <img src={image} alt="" />
    </>
  );
}

export default UploadImage;
