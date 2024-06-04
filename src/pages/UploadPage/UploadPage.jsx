import "./UploadPage.scss";
import Header from "../../components/Header/Header";
import UploadImage from "../../components/UploadImage/UploadImage";
import UploadForm from "../../components/UploadForm/UploadForm";

function UploadPage() {
  return (
    <>
      <h1 className="upload">Upload Video</h1>
      <UploadImage />
      <UploadForm />
    </>
  );
}

export default UploadPage;
