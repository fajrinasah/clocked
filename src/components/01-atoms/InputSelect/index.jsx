export default function InputSelect({
  flexDirection = "col",
  color = "accent",
  inputId,
  labelText,
  ref,
  value,
  onChange,
  onBlur,
  optionsArray = [{ id: 1, name: "" }],
}) {
  const RenderOptions = () => {
    return optionsArray.map((option) => {
      return (
        <option key={option?.id} value={option?.id}>
          {option?.name}
        </option>
      );
    });
  };

  return (
    <div
      className={`input-select label-and-input d-flex-${flexDirection} ${color}`}
    >
      <label htmlFor={inputId} className="label-for-input">
        {labelText}
      </label>
      <select
        className="input-for-label"
        name={inputId}
        id={inputId}
        ref={ref}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        <RenderOptions />
      </select>
    </div>
  );
}
