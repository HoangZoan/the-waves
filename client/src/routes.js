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
import AdminProducts from "./components/dashboard/admin/products";
import AddProducts from "./components/dashboard/admin/products/addEdit/add";
import EditProduct from "./components/dashboard/admin/products/addEdit/edit";
import Shop from "./components/shop";
import ProductDetail from "./components/product";
import UserCart from "./components/dashboard/user/cart";

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
                path="/dashboard/admin/edit_product/:id"
                component={AuthGuard(EditProduct)}
              />
              <Route
                path="/dashboard/admin/admin_products/add_products"
                component={AuthGuard(AddProducts)}
              />
              <Route
                path="/dashboard/admin/admin_products"
                component={AuthGuard(AdminProducts)}
              />
              <Route
                path="/dashboard/user/user_info"
                component={AuthGuard(UserInfo)}
              />
              <Route
                path="/dashboard/user/user_cart"
                component={AuthGuard(UserCart)}
              />
              <Route path="/dashboard" component={AuthGuard(UserDashboard)} />
              <Route path="/product_detail/:id" component={ProductDetail} />
              <Route path="/shop" component={Shop} />
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
