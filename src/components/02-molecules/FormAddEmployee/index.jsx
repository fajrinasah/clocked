import InputEmail from "../../01-atoms/InputEmail";
import InputSelectFormik from "../../01-atoms/InputSelectFormik";
import InputSubmit from "../../01-atoms/InputSubmit";
import ModalDefaultText from "../../01-atoms/ModalDefaultText";

export default function FormAddEmployee({
  handleSubmit = () => {},
  handleBlur = () => {},
  handleChange = () => {},
  emailTouched = false,
  emailErrors = false,
  emailValue,
  positionIdTouched = false,
  positionIdErrors = false,
  positionIdValue,
  isSubmitting = false,
  positionsArr = [{ id: 1, name: "" }],
}) {
  const submitDisabled =
    !emailValue ||
    !positionIdValue ||
    emailErrors ||
    positionIdErrors ||
    isSubmitting;

  return (
    <form onSubmit={handleSubmit} className="add-employee d-flex-col">
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

      <InputSelectFormik
        color="accent"
        inputId="positionId"
        labelText="Position"
        optionsArray={positionsArr}
      />

      {positionIdTouched && positionIdErrors && (
        <div className="error-container d-flex-row">
          <ModalDefaultText
            content={positionIdErrors}
            color="contrast"
            bgColor="accent"
          />
        </div>
      )}

      <InputSubmit value="Save" disabled={submitDisabled} width="full" />
    </form>
  );
}
