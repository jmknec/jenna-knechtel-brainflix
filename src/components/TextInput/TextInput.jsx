import "./TextInput.scss";

function TextInput({ name, id, className, placeholder }) {
  return (
    <>
      <textarea
        className={className}
        id={id}
        name={name}
        placeholder={placeholder}
      ></textarea>
    </>
  );
}

export default TextInput;
