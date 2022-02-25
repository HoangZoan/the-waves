import { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainLayout from "./hoc/mainLayout";
import Loader from "./utils/loader";

import { useDispatch, useSelector } from "react-redux";
import { userIsAuth, userSignOut } from "./store/actions/users.action";

import Header from "./components/navigation/header";
import Footer from "./components/navigation/footer";
import Home from "./components/home";
import RegisterLogin from "./components/auth";
import UserDashboard from "./components/dashboard";
import AuthGuard from "./hoc/authGuard";
import UserInfo from "./components/dashboard/user/info";

const Routes = (props) => {
  const [loading, setLoading] = useState(true);
  const users = useSelector((state) => state.users);
  const { auth } = users;
  const dispatch = useDispatch();

  const signOutUser = () => {
    dispatch(userSignOut());
  };

  useEffect(() => {
    dispatch(userIsAuth());
  }, [dispatch]);

  useEffect(() => {
    if (auth !== null) {
      setLoading(false);
    }
  }, [auth]);

  return (
    <BrowserRouter className="App">
      {loading ? (
        <Loader full={true} />
      ) : (
        <Fragment>
          <Header users={users} signOutUser={signOutUser} />

          <MainLayout>
            <Switch>
              <Route
                path="/dashboard/user/user_info"
                component={AuthGuard(UserInfo)}
              />
              <Route path="/dashboard" component={AuthGuard(UserDashboard)} />
              <Route path="/sign_in" component={RegisterLogin} />
              <Route path="/" component={Home} />
            </Switch>
          </MainLayout>

          <Footer />
        </Fragment>
      )}
    </BrowserRouter>
  );
};

export default Routes;
