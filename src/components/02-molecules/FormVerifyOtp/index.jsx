import InputText from "../../01-atoms/InputText";
import InputSubmit from "../../01-atoms/InputSubmit";
import ModalDefaultText from "../../01-atoms/ModalDefaultText";

export default function FormVerifyOtp({
  handleSubmit = () => {},
  handleBlur = () => {},
  handleChange = () => {},
  tokenTouched = false,
  tokenErrors = false,
  tokenValue,
  isSubmitting = false,
}) {
  const submitDisabled = !tokenValue || tokenErrors || isSubmitting;

  return (
    <form onSubmit={handleSubmit} className="verify-otp d-flex-col">
      <InputText
        color="accent"
        inputId="token"
        labelText="OTP token"
        required={true}
        inputName="token"
        value={tokenValue}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      {tokenTouched && tokenErrors && (
        <div className="error-container d-flex-row">
          <ModalDefaultText
            content={tokenErrors}
            color="contrast"
            bgColor="accent"
          />
        </div>
      )}

      <InputSubmit value="Verify" disabled={submitDisabled} width="full" />
    </form>
  );
}
