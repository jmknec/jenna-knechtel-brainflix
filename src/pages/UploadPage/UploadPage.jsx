import "./UploadPage.scss";
import UploadImage from "../../components/UploadImage/UploadImage";
import UploadForm from "../../components/UploadForm/UploadForm";

function UploadPage() {
  return (
    <main className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <div className="upload__container">
        <UploadImage />
        <UploadForm />
      </div>
    </main>
  );
}

export default UploadPage;
