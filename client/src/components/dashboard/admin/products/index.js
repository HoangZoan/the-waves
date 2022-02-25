import { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardLayout from "../../../../hoc/dashboardLayout";
import { productsByPaginate } from "../../../../store/actions/products.action";

const defaultValues = {
  keywords: "",
  brand: [],
  min: 0,
  max: 10000,
  frets: [],
  page: 1,
};

const AdminProducts = (prop) => {
  const products = useSelector((state) => state.products);
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  const [searchValues, setSearchValues] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    defaultValues
  );

  useEffect(() => {
    dispatch(productsByPaginate(searchValues));
  }, [dispatch, searchValues]);

  return <DashboardLayout>Admin Product</DashboardLayout>;
};

export default AdminProducts;
