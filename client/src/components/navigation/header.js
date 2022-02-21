import { Fragment } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bck_b_light">
      <div className="container">
        <div className="left">
          <div className="logo">WAVES</div>
        </div>

        <div className="right">
          <div className="top">
            <Fragment>
              <div className="cart_link">
                <span>0</span>
                <Link to="/dashboard/user/user_cart">My Cart</Link>
              </div>

              <Link to="/dashboard">My Account</Link>
              <span onClick={() => alert("Log out")}>Log out</span>

              <Link to="/sign_in">Login</Link>
            </Fragment>
          </div>

          <div className="botton">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;