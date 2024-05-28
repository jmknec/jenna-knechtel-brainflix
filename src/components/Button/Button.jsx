import "./Button.scss";

function Button({ className, btnLabel, icon, iconClass, altText }) {
  return (
    <button className={className}>
      <img className={iconClass} src={icon} alt={altText} />
      {btnLabel}
    </button>
  );
}

export default Button;
