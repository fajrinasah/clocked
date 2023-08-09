import InputText from "../../01-atoms/InputText";
import InputTime from "../../01-atoms/InputTime";
import InputSubmit from "../../01-atoms/InputSubmit";
import ModalDefaultText from "../../01-atoms/ModalDefaultText";

export default function FormAddShift({
  handleSubmit = () => {},
  handleBlur = () => {},
  handleChange = () => {},
  nameTouched = false,
  nameErrors = false,
  nameValue,
  fromTimeTouched = false,
  fromTimeErrors = false,
  fromTimeValue,
  toTimeTouched = false,
  toTimeErrors = false,
  toTimeValue,
  isSubmitting = false,
}) {
  const submitDisabled =
    !nameValue ||
    !fromTimeValue ||
    !toTimeValue ||
    nameErrors ||
    fromTimeErrors ||
    toTimeErrors ||
    isSubmitting;

  return (
    <form onSubmit={handleSubmit} className="add-shift d-flex-col">
      <InputText
        color="accent"
        inputId="name"
        labelText="Name"
        required={true}
        inputName="name"
        value={nameValue}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      {nameTouched && nameErrors && (
        <div className="error-container d-flex-row">
          <ModalDefaultText
            content={nameErrors}
            color="contrast"
            bgColor="accent"
          />
        </div>
      )}

      <InputTime
        color="accent"
        inputId="fromTime"
        labelText="Start"
        required={true}
        inputName="fromTime"
        value={fromTimeValue}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      {fromTimeTouched && fromTimeErrors && (
        <div className="error-container d-flex-row">
          <ModalDefaultText
            content={fromTimeErrors}
            color="contrast"
            bgColor="accent"
          />
        </div>
      )}

      <InputTime
        color="accent"
        inputId="toTime"
        labelText="End"
        required={true}
        inputName="toTime"
        value={toTimeValue}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      {toTimeTouched && toTimeErrors && (
        <div className="error-container d-flex-row">
          <ModalDefaultText
            content={toTimeErrors}
            color="contrast"
            bgColor="accent"
          />
        </div>
      )}

      <InputSubmit value="Save" disabled={submitDisabled} width="full" />
    </form>
  );
}
