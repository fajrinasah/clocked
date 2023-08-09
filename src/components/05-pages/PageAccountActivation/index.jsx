/*-------------------------------------------------*/
// IMPORT FROM DEPENDENCIES
/*-------------------------------------------------*/
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { useNavigate } from "react-router";

/*-------------------------------------------------*/
// IMPORT FROM PROJECT'S FILES
/*-------------------------------------------------*/
import { activateAccount } from "../../../store/slices/auth/thunks";
import { saveEmployeeDataValidationSchema } from "../../../validationSchemata";
import { useGetUuidWithContext } from "../../../helpers";
import { hash, encrypt } from "../../../helpers";

import TitlePage from "../../01-atoms/TitlePage";
import FormAccountActivation from "../../02-molecules/FormAccountActivation";

export default function PageAccountActivation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const uuidWithContext = useGetUuidWithContext();

  /*---------------Show Password Guides Toggle-------------*/
  const [guidesIsShown, setGuidesIsShown] = useState(false);

  const helpClicked = () => {
    setGuidesIsShown((guidesIsShown) => !guidesIsShown);
  };

  /*--------------Show Password Toggle--------------*/

  const [passwordIsShown, setPasswordIsShown] = useState(false);

  const togglePassword = () => {
    setPasswordIsShown((passwordIsShown) => !passwordIsShown);
  };

  const [confirmPasswordIsShown, setConfirmPasswordIsShown] = useState(false);

  const toggleConfirmPassword = () => {
    setConfirmPasswordIsShown(
      (confirmPasswordIsShown) => !confirmPasswordIsShown
    );
  };

  return (
    <div className="page full activate-account d-flex-col">
      <TitlePage content="Activate Account" />
      <br />
      <p id="activate-account-instruction">
        Activate your account by completing the form below.
      </p>
      <br />

      <Formik
        initialValues={{
          fullName: "",
          dob: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={saveEmployeeDataValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          try {
            // hash & aes encryptions
            const hashed = hash(values.password);
            const cipher = encrypt(hashed);

            dispatch(
              activateAccount({
                uuidWithContext,
                body: {
                  fullName: values.fullName,
                  dob: values.dob,
                  password: cipher,
                },
              })
            );

            console.log(`DISPATCHED: send verify otp token request`);

            setSubmitting(false);

            navigate("/auth/login");
          } catch (error) {
            console.log("error", error?.message);
            return { message: error?.message };
          }
        }}
      >
        {({
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <FormAccountActivation
            helpClicked={helpClicked}
            showClicked={togglePassword}
            confirmShowClicked={toggleConfirmPassword}
            handleSubmit={handleSubmit}
            handleBlur={handleBlur}
            handleChange={handleChange}
            isSubmitting={isSubmitting}
            fullNameTouched={touched.fullName}
            fullNameErrors={errors.fullName}
            fullNameValue={values.fullName}
            dobTouched={touched.dob}
            dobErrors={errors.dob}
            dobValue={values.dob}
            passwordTouched={touched.password}
            passwordErrors={errors.password}
            passwordValue={values.password}
            confirmPasswordTouched={touched.confirmPassword}
            confirmPasswordErrors={errors.confirmPassword}
            confirmPasswordValue={values.confirmPassword}
            guidesIsShown={guidesIsShown}
            passwordIsShown={passwordIsShown}
            confirmPasswordIsShown={confirmPasswordIsShown}
          />
        )}
      </Formik>
    </div>
  );
}
