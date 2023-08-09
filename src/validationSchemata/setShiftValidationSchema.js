import * as Yup from "yup";

/*----------------------------------------------------
SET SHIFT (TO AN EMPLOYEE) VALIDATION SCHEMA
-----------------------------------------------------*/
export const setShiftValidationSchema = Yup.object({
  employeeEmail: Yup.string().required("Employee's data is required."),

  scheduledDate: Yup.string()
    .required("Scheduled date is required.")
    .min(
      10,
      "Scheduled date's length must be 10 characters (format: YYYY-MM-DD)."
    )
    .max(
      10,
      "Scheduled date's length must be 10 characters (format: YYYY-MM-DD)."
    ),

  shiftId: Yup.number().required("Shift is required."),

  salaryDeduction: Yup.number().required(
    "Initial salary amount for this shift is required."
  ),
});
