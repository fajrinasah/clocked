import { DateTime } from "luxon";

import InputSelectFormik from "../../01-atoms/InputSelectFormik";
import InputDate from "../../01-atoms/InputDate";
import InputNumber from "../../01-atoms/InputNumber";
import InputSubmit from "../../01-atoms/InputSubmit";
import ModalDefaultText from "../../01-atoms/ModalDefaultText";

export default function FormSetShift({
  handleSubmit = () => {},
  handleBlur = () => {},
  handleChange = () => {},
  employeeEmailTouched = false,
  employeeEmailErrors = false,
  employeeEmailValue,
  scheduledDateTouched = false,
  scheduledDateErrors = false,
  scheduledDateValue,
  shiftIdTouched = false,
  shiftIdErrors = false,
  shiftIdValue,
  salaryDeductionTouched = false,
  salaryDeductionErrors = false,
  salaryDeductionValue,
  isSubmitting = false,
  employeesArr = [{ id: "", name: "" }], // id = email, name = fullName
  shiftsArr = [{ id: "", name: "" }],
}) {
  const submitDisabled =
    !employeeEmailValue ||
    !scheduledDateValue ||
    !shiftIdValue ||
    !salaryDeductionValue ||
    employeeEmailErrors ||
    scheduledDateErrors ||
    shiftIdErrors ||
    salaryDeductionErrors ||
    isSubmitting;

  return (
    <form onSubmit={handleSubmit} className="set-shift d-flex-col">
      <InputSelectFormik
        color="accent"
        inputId="employeeEmail"
        labelText="Employee"
        optionsArray={employeesArr}
      />

      {employeeEmailTouched && employeeEmailErrors && (
        <div className="error-container d-flex-row">
          <ModalDefaultText
            content={employeeEmailErrors}
            color="contrast"
            bgColor="accent"
          />
        </div>
      )}

      <InputDate
        color="accent"
        inputId="scheduledDate"
        labelText="Date"
        required={true}
        inputName="scheduledDate"
        min={DateTime.now().toFormat("yyyy-LL-dd")}
        value={scheduledDateValue}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      {scheduledDateTouched && scheduledDateErrors && (
        <div className="error-container d-flex-row">
          <ModalDefaultText
            content={scheduledDateErrors}
            color="contrast"
            bgColor="accent"
          />
        </div>
      )}

      <InputSelectFormik
        color="accent"
        inputId="shiftId"
        labelText="Shift"
        optionsArray={shiftsArr}
      />

      {shiftIdTouched && shiftIdErrors && (
        <div className="error-container d-flex-row">
          <ModalDefaultText
            content={shiftIdErrors}
            color="contrast"
            bgColor="accent"
          />
        </div>
      )}

      <InputNumber
        color="accent"
        inputId="salaryDeduction"
        labelText="Initial salary"
        required={true}
        inputName="salaryDeduction"
        value={salaryDeductionValue}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      {salaryDeductionTouched && salaryDeductionErrors && (
        <div className="error-container d-flex-row">
          <ModalDefaultText
            content={salaryDeductionErrors}
            color="contrast"
            bgColor="accent"
          />
        </div>
      )}

      <InputSubmit value="Save" disabled={submitDisabled} width="full" />
    </form>
  );
}
