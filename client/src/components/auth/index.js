import { Fragment, useState } from "react";
import { Button } from "@mui/material";
import AuthForm from "./authForm";

const RegisterLogin = (props) => {
  const [formType, setFormType] = useState(false);

  const toggleFormType = () => {
    setFormType(!formType);
  };

  return (
    <div className="page_wrapper">
      <div className="container">
        <div className="register_login_container">
          <div className="left">
            {formType ? (
              <Fragment>
                <h1>New customer</h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that.
                </p>
              </Fragment>
            ) : (
              <Fragment>
                <h1>Welcome back</h1>
                <p>
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy.
                </p>
              </Fragment>
            )}

            <Button
              variant="contained"
              size="small"
              onClick={() => {
                toggleFormType();
              }}
            >
              {formType ? "Already registered?" : "Need to register"}
            </Button>
          </div>
          <div className="right">
            <h2>{formType ? "Resgister" : "Sign in"}</h2>
            <AuthForm formType={formType} {...props} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterLogin;
