import { Fragment } from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";

const Header = ({ users, signOutUser }) => {
  const { cart } = useSelector((state) => state.users);

  return (
    <header className="bck_b_light">
      <div className="container">
        <div className="left">
          <div className="logo">WAVES</div>
        </div>

        <div className="right">
          <div className="top">
            {users.auth ? (
              <Fragment>
                <div className="cart_link">
                  <span>{cart.length}</span>
                  <Link to="/dashboard/user/user_cart">My Cart</Link>
                </div>

                <Link to="/dashboard">My Account</Link>
                <span onClick={() => signOutUser()}>Log out</span>
              </Fragment>
            ) : (
              <Link to="/sign_in">Login</Link>
            )}
          </div>

          <div className="bottom">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
