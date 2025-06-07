import style from "./BookForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";

const BookForm = () => {
  const handleSubmit = data => {
    console.log("Form Data:", data);
  };
  let selectedDate = "";

  const nameFieldId = useId();
  const emailFieldId = useId();
  const dateFieldId = useId();
  const commentFieldId = useId();

  const initialValues = {
    name: "",
    number: "",
  };

  return (
    <div className={style.formContainer}>
      <div className={style.formHead}>
        <h3>Book your campervan now</h3>
        <p className={style.formHeadText}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        className={style.form}
        // validationSchema={FeedbackSchema}
      >
        <Form className={style.feedbackFormItem}>
          <div>
            <Field
              type="text"
              name="name"
              id={nameFieldId}
              placeholder="Name*"
              className={style.formField}
            />
            <ErrorMessage name="name" />
          </div>
          <div>
            <Field
              type="email"
              name="email"
              id={emailFieldId}
              placeholder="Email*"
              className={style.formField}
            />
            <ErrorMessage name="email" />
          </div>
          <div>
            <Field
              type="date"
              name="bookingDate"
              id={dateFieldId}
              placeholder="Booking date*"
              className={style.formField}
            />
            <ErrorMessage name="number" />
          </div>
          <Field
            as="textarea"
            name="comment"
            id={commentFieldId}
            className={style.formFieldComment}
            placeholder="Comment"
          />
          <button className={style.formBtn} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookForm;
