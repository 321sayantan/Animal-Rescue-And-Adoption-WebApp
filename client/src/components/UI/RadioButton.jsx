const RadioButton = ({
  name,
  id,
  value,
  onChange,
  checked,
  text,
  setDefault,
}) => {
  return (
    <label htmlFor={id} className="radio-label">
      <input
        className="radio-input"
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
        defaultChecked={setDefault}
      />
      <span className="custom-radio" />
      {text}
    </label>
  );
};

export default RadioButton;
