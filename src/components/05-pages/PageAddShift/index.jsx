/*-------------------------------------------------*/
// IMPORT FROM DEPENDENCIES
/*-------------------------------------------------*/
import { useDispatch } from "react-redux";
import { Formik } from "formik";

/*-------------------------------------------------*/
// IMPORT FROM PROJECT'S FILES
/*-------------------------------------------------*/
import { addShift } from "../../../store/slices/shifts/thunks";
import { addShiftValidationSchema } from "../../../validationSchemata";

import TitlePage from "../../01-atoms/TitlePage";
import FormAddShift from "../../02-molecules/FormAddShift";

export default function PageAddShift() {
  const dispatch = useDispatch();

  return (
    <div className="page not-full add-shift d-flex-col">
      <TitlePage content="Add Shift" />

      <Formik
        initialValues={{
          name: "",
          fromTime: "",
          toTime: "",
        }}
        validationSchema={addShiftValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          try {
            dispatch(
              addShift({
                name: values.name,
                fromTime: values.fromTime,
                toTime: values.toTime,
              })
            );

            console.log(`DISPATCHED: send add shift request`);

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
          <FormAddShift
            handleSubmit={handleSubmit}
            handleBlur={handleBlur}
            handleChange={handleChange}
            isSubmitting={isSubmitting}
            nameTouched={touched.name}
            nameErrors={errors.name}
            nameValue={values.name}
            fromTimeTouched={touched.fromTime}
            fromTimeErrors={errors.fromTime}
            fromTimeValue={values.fromTime}
            toTimeTouched={touched.toTime}
            toTimeErrors={errors.toTime}
            toTimeValue={values.toTime}
          />
        )}
      </Formik>
    </div>
  );
}
