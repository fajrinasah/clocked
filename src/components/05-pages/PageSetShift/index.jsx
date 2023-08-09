/*-------------------------------------------------*/
// IMPORT FROM DEPENDENCIES
/*-------------------------------------------------*/
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";

/*-------------------------------------------------*/
// IMPORT FROM PROJECT'S FILES
/*-------------------------------------------------*/
import { setShift, getShifts } from "../../../store/slices/shifts/thunks";
import { getEmployees } from "../../../store/slices/employees/thunks";
import { setShiftValidationSchema } from "../../../validationSchemata";

import TitlePage from "../../01-atoms/TitlePage";
import FormSetShift from "../../02-molecules/FormSetShift";

export default function PageSetShift() {
  const dispatch = useDispatch();

  const { employees } = useSelector((state) => {
    return state.employees;
  });

  const { shifts } = useSelector((state) => {
    return state.shifts;
  });

  useEffect(() => {
    dispatch(getEmployees());
    dispatch(getShifts());
  }, []);

  return (
    <div className="page not-full set-shift d-flex-col">
      <TitlePage content="Set Shift" />

      <Formik
        initialValues={{
          employeeEmail: "",
          scheduledDate: "",
          shiftId: "",
          salaryDeduction: null,
        }}
        validationSchema={setShiftValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          try {
            dispatch(
              setShift({
                employeeEmail: values.employeeEmail,
                scheduledDate: values.scheduledDate,
                shiftId: parseInt(values.shiftId),
                salaryDeduction: values.salaryDeduction,
              })
            );

            console.log(`DISPATCHED: send set shift request`);

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
          <FormSetShift
            handleSubmit={handleSubmit}
            handleBlur={handleBlur}
            handleChange={handleChange}
            isSubmitting={isSubmitting}
            employeeEmailTouched={touched.employeeEmail}
            employeeEmailErrors={errors.employeeEmail}
            employeeEmailValue={values.employeeEmail}
            scheduledDateTouched={touched.scheduledDate}
            scheduledDateErrors={errors.scheduledDate}
            scheduledDateValue={values.scheduledDate}
            shiftIdTouched={touched.shiftId}
            shiftIdErrors={errors.shiftId}
            shiftIdValue={values.shiftId}
            salaryDeductionTouched={touched.salaryDeduction}
            salaryDeductionErrors={errors.salaryDeduction}
            salaryDeductionValue={values.salaryDeduction}
            shiftsArr={shifts}
            employeesArr={employees}
          />
        )}
      </Formik>
    </div>
  );
}
