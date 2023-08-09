import * as Yup from "yup";

/*----------------------------------------------------
LOGIN VALIDATION SCHEMA
-----------------------------------------------------*/
export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required.")
    .email("Email must be valid.")
    .matches(
      /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/,
      "Email domain must be included."
    )
    .min(10, "Email address' length should be between 10 to 45 characters.")
    .max(45, "Email address' length should be between 10 to 45 characters."),

  password: Yup.string()
    .required("Password is required.")
    .min(8, "Password must contains 8-20 characters.")
    .max(20, "Password must contains 8-20 characters.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
      "Password must contain min. 1 letter, min. 1 uppercase letter, min. 1 symbol. Symbols that can be used are @$!%*?&"
    ),
});
