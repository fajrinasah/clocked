export default function ToolbarInputSelect({
  flexDirection = "col",
  color = "accent",
  inputId,
  labelText,
  ref,
  onChange,
  optionsArray = [{ id: 1, name: "", selected: false }],
}) {
  const RenderOptions = () => {
    return optionsArray.map((option) => {
      return (
        <option key={option?.id} value={option?.id} selected={option?.selected}>
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
        onChange={onChange}
      >
        <RenderOptions />
      </select>
    </div>
  );
}
