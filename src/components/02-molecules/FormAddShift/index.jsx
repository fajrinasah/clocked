import InputText from "../../01-atoms/InputText";
import InputTime from "../../01-atoms/InputTime";
import InputSubmit from "../../01-atoms/InputSubmit";
import ModalDefaultText from "../../01-atoms/ModalDefaultText";

export default function FormAddShift({
  handleSubmit = () => {},
  handleBlur = () => {},
  handleChange = () => {},
  shiftNameTouched = false,
  shiftNameErrors = false,
  shiftNameValue,
  shiftStartTouched = false,
  shiftStartErrors = false,
  shiftStartValue,
  shiftEndTouched = false,
  shiftEndErrors = false,
  shiftEndValue,
  isSubmitting = false,
}) {
  const submitDisabled =
    !shiftNameValue ||
    !shiftStartValue ||
    !shiftEndValue ||
    shiftNameErrors ||
    shiftStartErrors ||
    shiftEndErrors ||
    isSubmitting;

  return (
    <form onSubmit={handleSubmit} className="add-shift d-flex-col">
      <InputText
        color="accent"
        inputId="shift-name"
        labelText="Name"
        required={true}
        inputName="shift-name"
        value={shiftNameValue}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      {shiftNameTouched && shiftNameErrors && (
        <div className="error-container d-flex-row">
          <ModalDefaultText
            content={shiftNameErrors}
            color="contrast"
            bgColor="accent"
          />
        </div>
      )}

      <InputTime
        color="accent"
        inputId="shift-start"
        labelText="Start"
        required={true}
        inputName="shift-start"
        value={shiftStartValue}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      {shiftStartTouched && shiftStartErrors && (
        <div className="error-container d-flex-row">
          <ModalDefaultText
            content={shiftStartErrors}
            color="contrast"
            bgColor="accent"
          />
        </div>
      )}

      <InputTime
        color="accent"
        inputId="shift-end"
        labelText="End"
        required={true}
        inputName="shift-end"
        value={shiftEndValue}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      {shiftEndTouched && shiftEndErrors && (
        <div className="error-container d-flex-row">
          <ModalDefaultText
            content={shiftEndErrors}
            color="contrast"
            bgColor="accent"
          />
        </div>
      )}

      <InputSubmit value="Save" disabled={submitDisabled} width="full" />
    </form>
  );
}
