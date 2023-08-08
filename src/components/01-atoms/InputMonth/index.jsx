export default function InputMonth({
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
      className={`input-month label-and-input d-flex-${flexDirection} ${color}`}
    >
      <label htmlFor={inputId} className="label-for-input">
        {labelText}
      </label>
      <input
        className="input-for-label"
        type="month"
        required={required}
        id={inputId}
        name={inputName}
        defaultValue={defaultValue}
        min={min}
        max={max}
        pattern="[0-9]{4}-[0-9]{2}"
        title={title}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
}
