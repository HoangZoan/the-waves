import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardLayout from "../../../hoc/dashboardLayout";
import Loader from "../../../utils/loader";
import CardDetail from "./cardDetail";
import { userRemoveFromCart } from "../../../store/actions/users.action";

const UserCart = (props) => {
  const [loading, setLoading] = useState(false);
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  const removeItem = (position) => {
    dispatch(userRemoveFromCart(position));
  };

  const calculateTotal = () => {
    let total = 0;
    props.users.cart.forEach((item) => {
      total += parseInt(item.price, 10);
    });

    return total;
  };

  return (
    <DashboardLayout title="Your Cart">
      {props.users.cart && props.users.cart.length > 0 ? (
        <>
          <CardDetail
            products={props.users.cart}
            removeItem={(position) => removeItem(position)}
          />

          <div className="user_cart_sum">
            <div>Total amount: ${calculateTotal()}</div>
          </div>
        </>
      ) : (
        <div>There is nothing in your cart</div>
      )}
    </DashboardLayout>
  );
};

export default UserCart;
