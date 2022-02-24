import { Fragment, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Loader from "../../utils/loader";
import { errorHelper } from "../../utils/tools";

import { useSelector, useDispatch } from "react-redux";
import { TextField, Button } from "@mui/material";
import { userRegister, userSignIn } from "../../store/actions/users.action";

const AuthForm = (props) => {
  const notifications = useSelector((state) => state.notifications);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { email: "hoang@test.com", password: "123456" },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Sorry, email is required")
        .email("This is an invalid email"),
      password: Yup.string().required("Sorry, the password is required"),
    }),
    onSubmit: (values) => {
      setLoading(true);
      handleSubmit(values);
    },
  });

  const handleSubmit = (values) => {
    if (props.formType) {
      // Register
      dispatch(userRegister(values));
    } else {
      // Sign in
      dispatch(userSignIn(values));
    }
  };

  useEffect(() => {
    if (notifications && notifications.success) {
      props.history.push("/dashboard");
    } else {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notifications.error, notifications.success, props.history]);

  return (
    <Fragment>
      <div className="auth_container">
        {loading ? (
          <Loader />
        ) : (
          <form className="mt-3" onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <TextField
                style={{ width: "100%" }}
                name="email"
                label="Enter your email"
                variant="outlined"
                {...formik.getFieldProps("email")}
                {...errorHelper(formik, "email")}
              />
            </div>
            <div className="form-group mt-3 mb-3">
              <TextField
                style={{ width: "100%" }}
                name="password"
                label="Enter your password"
                variant="outlined"
                type="password"
                {...formik.getFieldProps("password")}
                {...errorHelper(formik, "password")}
              />
            </div>

            <Button variant="contained" type="submit" size="small">
              {props.formType ? "Register" : "Login"}
            </Button>
          </form>
        )}
      </div>
    </Fragment>
  );
};

export default AuthForm;
