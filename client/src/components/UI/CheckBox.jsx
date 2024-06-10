const CheckBox = ({
    name,
    id,
    value,
    onChange,
    checked,
    text,
    setDefault,
  }) => {
    return (
      <label htmlFor={id} className="check-label">
        <input
          className="checkbox-input"
          type="checkbox"
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          checked={checked}
          defaultChecked={setDefault}
        />
        <span className="custom-check" />
        {text}
      </label>
    );
  };
  
  export default CheckBox;