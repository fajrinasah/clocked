import * as Yup from "yup";

/*----------------------------------------------------
SAVE EMPLOYEE DATA VALIDATION SCHEMA
-----------------------------------------------------*/
export const saveEmployeeDataValidationSchema = Yup.object({
  fullName: Yup.string()
    .required("Full name is required.")
    .min(3, "Full name's length must be between 3 to 45 characters.")
    .max(45, "Full name's length must be between 3 to 45 characters."),

  dob: Yup.string()
    .required("Date of birth is required.")
    .min(
      10,
      "Date of birth's length must be 10 characters (format: YYYY-MM-DD)."
    )
    .max(
      10,
      "Date of birth's length must be 10 characters (format: YYYY-MM-DD)."
    ),

  password: Yup.string()
    .required("Password is required.")
    .min(8, "Password must contains 8-20 characters.")
    .max(20, "Password must contains 8-20 characters.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
      "Password must contain min. 1 letter, min. 1 uppercase letter, min. 1 symbol. Symbols that can be used are @$!%*?&"
    ),

  confirmPassword: Yup.string()
    .required("Plase re-enter your password.")
    .oneOf(
      [Yup.ref("password"), null],
      `Password in "Confirm password" must match with the password above.`
    ),
});
