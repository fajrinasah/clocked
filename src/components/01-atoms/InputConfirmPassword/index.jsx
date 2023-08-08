import "./styles.css";

import InputCheckboxShowPassword from "../InputCheckboxShowPassword";

export default function InputConfirmPassword({
  color = "accent",
  inputId = "",
  labelText = "",
  showClicked = () => {},
  passwordIsShown,
  required = true,
  inputName = "",
  inputPlaceholder = "",
  title = "",
  value,
  onChange,
  onBlur,
}) {
  return (
    <div className={`input-confirm-password ${color}`}>
      <label for={inputId} className="label-for-input">
        {labelText}
      </label>
      <input
        className="input-for-label"
        type={passwordIsShown ? "text" : "password"}
        required={required}
        id={inputId}
        name={inputName}
        placeholder={inputPlaceholder}
        title={title}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <InputCheckboxShowPassword showClicked={showClicked} />
    </div>
  );
}
