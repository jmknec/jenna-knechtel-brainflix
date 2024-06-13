import "./TextInput.scss";

function TextInput({ name, id, className, placeholder, onChange, value }) {
  return (
    <>
      <textarea
        className={className}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      ></textarea>
    </>
  );
}

export default TextInput;
