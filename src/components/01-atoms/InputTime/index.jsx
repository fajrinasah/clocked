export default function InputTime({
  flexDirection = "col",
  color = "accent",
  inputId = "",
  labelText = "",
  required = true,
  inputName = "",
  defaultValue,
  min = "",
  max = "",
  title = "",
  value,
  onChange,
  onBlur,
}) {
  return (
    <div
      className={`input-time label-and-input d-flex-${flexDirection} ${color}`}
    >
      <label htmlFor={inputId} className="label-for-input">
        {labelText}
      </label>
      <input
        className="input-for-label"
        type="time"
        required={required}
        id={inputId}
        name={inputName}
        defaultValue={defaultValue}
        min={min}
        max={max}
        step="2"
        pattern="[0-9]{2}:[0-9]{2}:[0-9]{2}"
        title={title}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
}
