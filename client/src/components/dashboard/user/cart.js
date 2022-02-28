import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardLayout from "../../../hoc/dashboardLayout";
import Loader from "../../../utils/loader";

const UserCart = (props) => {
  const [loading, setLoading] = useState(false);
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  return (
    <DashboardLayout title="Your Cart">
      {props.users.cart && props.users.length > 0 ? (
        <></>
      ) : (
        <div>There is nothing in your cart</div>
      )}
    </DashboardLayout>
  );
};

export default UserCart;
