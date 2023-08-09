/*-------------------------------------------------*/
// IMPORT FROM DEPENDENCIES
/*-------------------------------------------------*/
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Formik } from "formik";

/*-------------------------------------------------*/
// IMPORT FROM PROJECT'S FILES
/*-------------------------------------------------*/
import { login } from "../../../store/slices/auth/thunks";
import { loginValidationSchema } from "../../../validationSchemata";
import { hash, encrypt } from "../../../helpers";

import TitlePage from "../../01-atoms/TitlePage";
import FormLogin from "../../02-molecules/FormLogin";

export default function PageLogin() {
  const dispatch = useDispatch();

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

  // redirect to landing page when user logged in
  const { email, roleId } = useSelector((state) => {
    return state.auth?.user;
  });

  if (email) {
    if (roleId === 1) {
      // for admin
      return <Navigate to="/shifts/set-shift" replace />;
    } else {
      // for employee
      return <Navigate to="/home" replace />;
    }
  }

  return (
    <div className="page full login d-flex-col">
      <TitlePage content="Login" />

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          try {
            // hash & aes encryptions
            const hashed = hash(values.password);
            const cipher = encrypt(hashed);

            dispatch(
              login({
                email: values.email,
                password: cipher,
              })
            );

            console.log(`DISPATCHED: login request`);

            setSubmitting(false);
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
          <FormLogin
            helpClicked={helpClicked}
            showClicked={togglePassword}
            handleSubmit={handleSubmit}
            handleBlur={handleBlur}
            handleChange={handleChange}
            emailTouched={touched.email}
            emailErrors={errors.email}
            emailValue={values.email}
            passwordTouched={errors.password}
            passwordErrors={errors.password}
            passwordValue={values.password}
            isSubmitting={isSubmitting}
            guidesIsShown={guidesIsShown}
            passwordIsShown={passwordIsShown}
          />
        )}
      </Formik>
    </div>
  );
}
