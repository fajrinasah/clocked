import { DateTime } from "luxon";

import InputSelectFormik from "../../01-atoms/InputSelectFormik";
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

      <InputMonth
        color="accent"
        inputId="salaryPeriod"
        labelText="Period"
        required={true}
        inputName="salaryPeriod"
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
        inputId="baseAmount"
        labelText="Base amount"
        required={true}
        inputName="baseAmount"
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
