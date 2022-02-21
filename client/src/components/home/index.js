import { useEffect } from "react";
import Featured from "./featured";
import SlimPromotion from "../../utils/promotions/slimBlock";
import { useDispatch } from "react-redux";

import { productsBySort } from "../../store/actions/products.action";

const slimPromotion = {
  img: "./images/featured/featured_home_3.jpg",
  lineOne: "Up to  40% off",
  lineTwo: "In second hand guitar",
  linkTitle: "Shop Now",
  linkTo: "/shop",
};

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsBySort());
  });
  return (
    <div>
      <Featured />
      <SlimPromotion items={slimPromotion} />
    </div>
  );
};

export default Home;
