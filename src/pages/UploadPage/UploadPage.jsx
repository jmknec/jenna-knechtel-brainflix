import { Link } from "react-router-dom";
import "./UploadPage.scss";
import UploadImage from "../../components/UploadImage/UploadImage";
import UploadForm from "../../components/UploadForm/UploadForm";
import Button from "../../components/Button/Button";
import Publish from "../../assets/icons/publish.svg";

function UploadPage() {
  return (
    <main className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <UploadImage />
      <UploadForm />
      <div className="upload__click-container">
        <Button
          className="upload__publish"
          btnLabel="Publish"
          icon={Publish}
          iconClass="upload__publish-icon"
        />
        <Link className="upload__nav-link" to="/">
          <h2 className="upload__cancel">Cancel</h2>
        </Link>
      </div>
    </main>
  );
}

export default UploadPage;
