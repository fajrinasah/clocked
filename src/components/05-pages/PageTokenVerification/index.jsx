/*-------------------------------------------------*/
// IMPORT FROM DEPENDENCIES
/*-------------------------------------------------*/
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { useNavigate } from "react-router";

/*-------------------------------------------------*/
// IMPORT FROM PROJECT'S FILES
/*-------------------------------------------------*/
import { verifyOtpToken } from "../../../store/slices/auth/thunks";
import { tokenValidationSchema } from "../../../validationSchemata";
import { useGetUuidWithContext } from "../../../helpers";

import TitlePage from "../../01-atoms/TitlePage";
import FormVerifyOtp from "../../02-molecules/FormVerifyOtp";

export default function PageTokenVerification() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const uuidWithContext = useGetUuidWithContext();

  return (
    <div className="page full verify d-flex-col">
      <TitlePage content="Verify OTP Token" />

      <Formik
        initialValues={{
          token: "",
        }}
        validationSchema={tokenValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          try {
            dispatch(
              verifyOtpToken({
                uuidWithContext,
                body: { token: values.token },
              })
            );

            console.log(`DISPATCHED: send verify otp token request`);

            setSubmitting(false);

            navigate(`/auth/activate-account/${uuidWithContext}`);
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
          <FormVerifyOtp
            handleSubmit={handleSubmit}
            handleBlur={handleBlur}
            handleChange={handleChange}
            isSubmitting={isSubmitting}
            tokenTouched={touched.token}
            tokenErrors={errors.token}
            tokenValue={values.token}
          />
        )}
      </Formik>
    </div>
  );
}
