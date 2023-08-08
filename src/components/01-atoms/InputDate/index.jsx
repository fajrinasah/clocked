export default function InputDate({
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
      className={`input-date label-and-input d-flex-${flexDirection} ${color}`}
    >
      <label htmlFor={inputId} className="label-for-input">
        {labelText}
      </label>
      <input
        className="input-for-label"
        type="date"
        required={required}
        id={inputId}
        name={inputName}
        defaultValue={defaultValue}
        min={min}
        max={max}
        pattern="\d{4}-\d{2}-\d{2}"
        title={title}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
}
