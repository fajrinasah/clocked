/*-------------------------------------------------*/
// IMPORT FROM DEPENDENCIES
/*-------------------------------------------------*/
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";

/*-------------------------------------------------*/
// IMPORT FROM PROJECT'S FILES
/*-------------------------------------------------*/
import {
  addEmployee,
  getPositions,
} from "../../../store/slices/employees/thunks";
import { addEmployeeValidationSchema } from "../../../validationSchemata";

import TitlePage from "../../01-atoms/TitlePage";
import FormAddEmployee from "../../02-molecules/FormAddEmployee";

export default function PageAddEmployee() {
  const dispatch = useDispatch();

  const { positions } = useSelector((state) => {
    return state.employees;
  });

  useEffect(() => {
    dispatch(getPositions());
  }, []);

  return (
    <div className="page not-full login d-flex-col">
      <TitlePage content="Add Employee" />

      <Formik
        initialValues={{
          email: "",
          positionId: null,
        }}
        validationSchema={addEmployeeValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          try {
            dispatch(
              addEmployee({
                email: values.email,
                positionId: parseInt(values.positionId),
              })
            );

            console.log(`DISPATCHED: add employee request`);

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
          <FormAddEmployee
            handleSubmit={handleSubmit}
            handleBlur={handleBlur}
            handleChange={handleChange}
            emailTouched={touched.email}
            emailErrors={errors.email}
            emailValue={values.email}
            positionIdTouched={errors.positionId}
            positionIdErrors={errors.positionId}
            positionIdValue={values.positionId}
            isSubmitting={isSubmitting}
            positionsArr={positions}
          />
        )}
      </Formik>
    </div>
  );
}
