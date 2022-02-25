import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const PreventSignInRoute = (props) => {
  const users = useSelector((state) => state.users);

  return (
    <Fragment>
      {users.auth ? <Redirect to="/dashboard" /> : props.children}
    </Fragment>
  );
};

export default PreventSignInRoute;
