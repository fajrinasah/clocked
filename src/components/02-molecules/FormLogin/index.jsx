import InputEmail from "../../01-atoms/InputEmail";
import InputPassword from "../../01-atoms/InputPassword";
import InputSubmit from "../../01-atoms/InputSubmit";
import ModalDefaultText from "../../01-atoms/ModalDefaultText";

export default function FormLogin({
  helpClicked = () => {},
  showClicked = () => {},
  handleSubmit = () => {},
  handleBlur = () => {},
  handleChange = () => {},
  emailTouched = false,
  emailErrors = false,
  emailValue,
  passwordTouched = false,
  passwordErrors = false,
  passwordValue,
  isSubmitting = false,
  guidesIsShown = false,
  passwordIsShown = false,
}) {
  const submitDisabled =
    !emailValue ||
    !passwordValue ||
    emailErrors ||
    passwordErrors ||
    isSubmitting;

  return (
    <form onSubmit={handleSubmit} className="login d-flex-col">
      <InputEmail
        color="accent"
        inputId="email"
        labelText="Email"
        required={true}
        inputName="email"
        value={emailValue}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      {emailTouched && emailErrors && (
        <div className="error-container d-flex-row">
          <ModalDefaultText
            content={emailErrors}
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

      <InputSubmit value="Log in" disabled={submitDisabled} width="full" />
    </form>
  );
}
