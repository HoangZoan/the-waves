import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showToast } from "../utils/tools";
import { clearNotification } from "../store/actions";

const MainLayout = (props) => {
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  useEffect(() => {
    if (notifications && notifications.error) {
      const msg = notifications.msg || "Error";
      showToast("ERROR", msg);
      dispatch(clearNotification());
    }

    if (notifications && notifications.success) {
      const msg = notifications.msg || "Good job";
      showToast("SUCCESS", msg);
      dispatch(clearNotification());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notifications.error, notifications.success, dispatch]);

  return (
    <Fragment>
      {props.children}
      <ToastContainer />
    </Fragment>
  );
};

export default MainLayout;
