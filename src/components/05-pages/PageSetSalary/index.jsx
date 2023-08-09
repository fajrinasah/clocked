/*-------------------------------------------------*/
// IMPORT FROM DEPENDENCIES
/*-------------------------------------------------*/
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";

/*-------------------------------------------------*/
// IMPORT FROM PROJECT'S FILES
/*-------------------------------------------------*/
import { getEmployees } from "../../../store/slices/employees/thunks";
import { addSalary } from "../../../store/slices/salaries/thunks";
import { setSalaryValidationSchema } from "../../../validationSchemata";

import TitlePage from "../../01-atoms/TitlePage";
import FormSetSalary from "../../02-molecules/FormSetSalary";

export default function PageSetSalary() {
  const dispatch = useDispatch();

  const { employees } = useSelector((state) => {
    return state.employees;
  });

  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  return (
    <div className="page not-full set-salary d-flex-col">
      <TitlePage content="Set Salary" />

      <Formik
        initialValues={{
          employeeEmail: "",
          salaryPeriod: "",
          baseAmount: null,
        }}
        validationSchema={setSalaryValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          try {
            dispatch(
              addSalary({
                employeeEmail: values.employeeEmail,
                salaryPeriod: values.salaryPeriod,
                baseAmount: values.baseAmount,
              })
            );

            console.log(`DISPATCHED: send set salary request`);

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
          <FormSetSalary
            handleSubmit={handleSubmit}
            handleBlur={handleBlur}
            handleChange={handleChange}
            isSubmitting={isSubmitting}
            employeeEmailTouched={touched.employeeEmail}
            employeeEmailErrors={errors.employeeEmail}
            employeeEmailValue={values.employeeEmail}
            salaryPeriodTouched={touched.salaryPeriod}
            salaryPeriodErrors={errors.salaryPeriod}
            salaryPeriodValue={values.salaryPeriod}
            baseAmountTouched={touched.baseAmount}
            baseAmountErrors={errors.baseAmount}
            baseAmountValue={values.baseAmount}
            employeesArr={employees}
          />
        )}
      </Formik>
    </div>
  );
}
