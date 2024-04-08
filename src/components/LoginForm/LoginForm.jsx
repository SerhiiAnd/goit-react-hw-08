import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { Formik, Form, Field } from "formik";
import css from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };
  return (
    <div className={css.div}>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          email: "",
          password: "",
        }}
      >
        <Form className={css.form}>
          <Field
            type="email"
            name="email"
            placeholder="Email"
            className={css.field}
          />
          <Field
            type="password"
            name="password"
            placeholder="Password"
            className={css.field}
          />
          <button type="submit" className={css.button}>
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}
