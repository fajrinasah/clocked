import { Field } from "formik";

export default function InputSelectFormik({
  flexDirection = "col",
  color = "accent",
  inputId,
  labelText,
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

      <Field
        as="select"
        name={inputId}
        className="input-for-label"
        id={inputId}
      >
        {/* <option value="">Choose position</option> */}
        <RenderOptions />
      </Field>
    </div>
  );
}
