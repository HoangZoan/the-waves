import { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainLayout from "./hoc/mainLayout";
import Loader from "./utils/loader";

import Header from "./components/navigation/header";
import Footer from "./components/navigation/footer";
import Home from "./components/home";
import RegisterLogin from "./components/auth";

import { useDispatch, useSelector } from "react-redux";
import { userIsAuth } from "./store/actions/users.action";

const Routes = (props) => {
  const [loading, setLoading] = useState(true);
  const { auth } = useSelector((state) => state.users);
  const dispatch = useDispatch();

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
          <Header />

          <MainLayout>
            <Switch>
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
