import { DateTime } from "luxon";

import InputSelect from "../../01-atoms/InputSelect";
import InputMonth from "../../01-atoms/InputMonth";
import InputNumber from "../../01-atoms/InputNumber";
import InputSubmit from "../../01-atoms/InputSubmit";
import ModalDefaultText from "../../01-atoms/ModalDefaultText";

export default function FormSetSalary({
  handleSubmit = () => {},
  handleBlur = () => {},
  handleChange = () => {},
  employeeEmailTouched = false,
  employeeEmailErrors = false,
  employeeEmailValue,
  salaryPeriodTouched = false,
  salaryPeriodErrors = false,
  salaryPeriodValue,
  baseAmountTouched = false,
  baseAmountErrors = false,
  baseAmountValue,
  isSubmitting = false,
  employeesArr = [{ id: "", name: "" }], // id = email, name = fullName
}) {
  const submitDisabled =
    !employeeEmailValue ||
    !salaryPeriodValue ||
    !baseAmountValue ||
    employeeEmailErrors ||
    salaryPeriodErrors ||
    baseAmountErrors ||
    isSubmitting;

  return (
    <form onSubmit={handleSubmit} className="set-salary d-flex-col">
      <InputSelect
        color="accent"
        inputId="employee-email"
        labelText="Employee"
        value={employeeEmailValue}
        onBlur={handleBlur}
        onChange={handleChange}
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

      <InputMonth
        color="accent"
        inputId="shift-start"
        labelText="Period"
        required={true}
        inputName="shift-start"
        min={DateTime.now().minus({ years: 1 }).toFormat("yyyy-LL")}
        max={DateTime.now().toFormat("yyyy-LL")}
        value={salaryPeriodValue}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      {salaryPeriodTouched && salaryPeriodErrors && (
        <div className="error-container d-flex-row">
          <ModalDefaultText
            content={salaryPeriodErrors}
            color="contrast"
            bgColor="accent"
          />
        </div>
      )}

      <InputNumber
        color="accent"
        inputId="shift-end"
        labelText="Base amount"
        required={true}
        inputName="shift-end"
        value={baseAmountValue}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      {baseAmountTouched && baseAmountErrors && (
        <div className="error-container d-flex-row">
          <ModalDefaultText
            content={baseAmountErrors}
            color="contrast"
            bgColor="accent"
          />
        </div>
      )}

      <InputSubmit value="Save" disabled={submitDisabled} width="full" />
    </form>
  );
}
