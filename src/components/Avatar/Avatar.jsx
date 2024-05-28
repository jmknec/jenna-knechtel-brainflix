import Image from "../../assets/images/Mohan-muruge.jpg";
import "./Avatar.scss";

function Avatar(props) {
  return (
    <img className={props.className} src={Image} alt={props.altText}></img>
  );
}

export default Avatar;
