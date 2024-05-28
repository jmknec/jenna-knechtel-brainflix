import "./Avatar.scss";

function Avatar({ className, image, altText }) {
  return <img className={className} src={image} alt={altText}></img>;
}

export default Avatar;
