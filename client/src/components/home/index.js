import { useEffect } from "react";
import Featured from "./featured";
import SlimPromotion from "../../utils/promotions/slimBlock";
import { useDispatch, useSelector } from "react-redux";
import { productsBySort } from "../../store/actions/products.action";
import CardBlock from "../../utils/products/card.blocks";

const slimPromotion = {
  img: "./images/featured/featured_home_3.jpg",
  lineOne: "Up to  40% off",
  lineTwo: "In second hand guitar",
  linkTitle: "Shop Now",
  linkTo: "/shop",
};

const Home = () => {
  const { bySold, byDate } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      productsBySort({
        limit: 4,
        sortBy: "itemSold",
        order: "desc",
        where: "bySold",
      })
    );
    dispatch(
      productsBySort({
        limit: 4,
        sortBy: "date",
        order: "desc",
        where: "byDate",
      })
    );
  }, [dispatch]);

  return (
    <div>
      <Featured />

      {bySold && <CardBlock items={bySold} title="Best selling guitar" />}

      <SlimPromotion items={slimPromotion} />
    </div>
  );
};

export default Home;
