import { DateTime } from "luxon";

import InputText from "../../01-atoms/InputText";
import InputDate from "../../01-atoms/InputDate";
import InputPassword from "../../01-atoms/InputPassword";
import InputConfirmPassword from "../../01-atoms/InputConfirmPassword";
import InputSubmit from "../../01-atoms/InputSubmit";
import ModalDefaultText from "../../01-atoms/ModalDefaultText";

export default function FormAccountActivation({
  helpClicked = () => {},
  showClicked = () => {},
  confirmShowClicked = () => {},
  handleSubmit = () => {},
  handleBlur = () => {},
  handleChange = () => {},
  fullNameTouched = false,
  fullNameErrors = false,
  fullNameValue,
  dobTouched = false,
  dobErrors = false,
  dobValue,
  passwordTouched = false,
  passwordErrors = false,
  passwordValue,
  confirmPasswordTouched = false,
  confirmPasswordErrors = false,
  confirmPasswordValue,
  isSubmitting = false,
  guidesIsShown = false,
  passwordIsShown = false,
  confirmPasswordIsShown = false,
}) {
  const submitDisabled =
    !fullNameValue ||
    !dobValue ||
    !passwordValue ||
    !confirmPasswordValue ||
    fullNameErrors ||
    dobErrors ||
    passwordErrors ||
    confirmPasswordErrors ||
    isSubmitting;

  return (
    <form onSubmit={handleSubmit} className="account-activation d-flex-col">
      <InputText
        color="accent"
        inputId="full-name"
        labelText="Full name"
        required={true}
        inputName="full-name"
        value={fullNameValue}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      {fullNameTouched && fullNameErrors && (
        <div className="error-container d-flex-row">
          <ModalDefaultText
            content={fullNameErrors}
            color="contrast"
            bgColor="accent"
          />
        </div>
      )}

      <InputDate
        color="accent"
        inputId="dob"
        labelText="Date of birth"
        required={true}
        inputName="dob"
        min={DateTime.fromObject({ year: 2023, month: 12, day: 31 })
          .minus({ years: 50 })
          .toFormat("yyyy-LL-dd")}
        max={DateTime.fromObject({ year: 2023, month: 12, day: 31 })
          .minus({ years: 17 })
          .toFormat("yyyy-LL-dd")}
        value={dobValue}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      {dobTouched && dobErrors && (
        <div className="error-container d-flex-row">
          <ModalDefaultText
            content={dobErrors}
            color="contrast"
            bgColor="accent"
          />
        </div>
      )}

      <InputPassword
        color="accent"
        inputId="password"
        labelText="Password"
        helpClicked={helpClicked}
        showClicked={showClicked}
        required={true}
        guidesIsShown={guidesIsShown}
        passwordIsShown={passwordIsShown}
        inputName="password"
        value={passwordValue}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      {passwordTouched && passwordErrors && (
        <div className="error-container d-flex-row">
          <ModalDefaultText
            content={passwordErrors}
            color="contrast"
            bgColor="accent"
          />
        </div>
      )}

      <InputConfirmPassword
        color="accent"
        inputId="confirmPassword"
        labelText="Confirm password"
        showClicked={confirmShowClicked}
        passwordIsShown={confirmPasswordIsShown}
        required={true}
        inputName="confirmPassword"
        value={confirmPasswordValue}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      {confirmPasswordTouched && confirmPasswordErrors && (
        <div className="error-container d-flex-row">
          <ModalDefaultText
            content={confirmPasswordErrors}
            color="contrast"
            bgColor="accent"
          />
        </div>
      )}

      <InputSubmit value="Save" disabled={submitDisabled} width="full" />
    </form>
  );
}
