import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Link } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <div className={css.div}>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
      >
        <Form className={css.form} autoComplete="off">
          <label className={css.label}>
            Name
            <Field
              type="text"
              name="name"
              placeholder="Name"
              className={css.field}
            ></Field>
          </label>
          <label className={css.label}>
            Email
            <Field className={css.field} type="email" name="email"></Field>
          </label>
          <label className={css.label}>
            Password
            <Field
              className={css.field}
              type="password"
              name="password"
            ></Field>
          </label>
          <button type="submit" className={css.button}>
            Register
          </button>
        </Form>
      </Formik>
      <Link to="/login" className={css.link}>
        Already have an account?
      </Link>
    </div>
  );
}
