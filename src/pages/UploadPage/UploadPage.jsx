import { Link } from "react-router-dom";
import "./UploadPage.scss";
import UploadImage from "../../components/UploadImage/UploadImage";
import UploadForm from "../../components/UploadForm/UploadForm";

function UploadPage() {
  return (
    <main className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <UploadImage />
      <UploadForm />
      <Link className="upload__nav-link" to="/">
        <h2 className="upload__cancel">Cancel</h2>
      </Link>
    </main>
  );
}

export default UploadPage;
