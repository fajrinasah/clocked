import "./styles.css";

import ButtonHelp from "../ButtonHelp";
import ModalHelp from "../ModalHelp";
import InputCheckboxShowPassword from "../InputCheckboxShowPassword";

export default function InputPassword({
  color = "accent",
  inputId = "",
  labelText = "",
  helpClicked = () => {},
  showClicked = () => {},
  required = true,
  inputName = "",
  inputPlaceholder = "",
  title = "",
  guidesIsShown,
  passwordIsShown,
  value,
  onChange,
  onBlur,
}) {
  const passwordGuides = [
    <ul>
      <li key="guide-1">Password must be 8-20 characters</li>
      <li key="guide-2">Password must contain at least 1 letter</li>
      <li key="guide-3">Password must contain at least 1 uppercase letter</li>
      <li key="guide-4">Password must contain at least 1 symbol</li>
      <li key="guide-5">Symbols that can be used are @$!%*?&</li>
    </ul>,
  ];

  return (
    <div className={`input-password ${color}`}>
      <label htmlFor={inputId} className="label-for-input">
        {labelText}
      </label>
      <div className="guides-container">
        {guidesIsShown && <ModalHelp ulContent={passwordGuides} />}
        <ButtonHelp onClick={helpClicked} />
      </div>
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
