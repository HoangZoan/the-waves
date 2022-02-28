import { renderCardImage, WavesButton } from "../../utils/tools";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import AddToCartHandler from "../addToCartHandler";
import { userAddToCart } from "../../store/actions/users.action";

const Card = (props) => {
  const [modal, setModal] = useState(false);
  const [errorType, setErrorType] = useState(null);
  const user = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    if (!user.auth) {
      setModal(true);
      setErrorType("auth");
      return false;
    }
    if (!user.data.verified) {
      setModal(true);
      setErrorType("verify");
      return false;
    }

    dispatch(userAddToCart(item));
  };

  const handleClose = () => {
    setModal(false);
  };

  return (
    <div className={`card_item_wrapper ${props.grid ? "grid_bars" : ""}`}>
      <div
        className="image"
        style={{ background: `url(${renderCardImage(props.item.images)})` }}
      ></div>

      <div className="action_container">
        <div className="tags">
          <div className="brand">{props.item.brand.name}</div>
          <div className="name">{props.item.model}</div>
          <div className="name">{props.item.price}</div>
        </div>

        {props.grid && (
          <div className="description">{props.item.description}</div>
        )}

        <div className="actions">
          <div className="button_wrapp">
            <WavesButton
              type="default"
              altClass="card_link"
              title="View product"
              linkTo={`/product_detail/${props.item._id}`}
              style={{ fontWeight: "bold" }}
            />
          </div>
          <div className="button_wrapp">
            <WavesButton
              type="bag_link"
              runAction={() => handleAddToCart(props.item)}
              style={{ fontSize: "23" }}
            />
          </div>
        </div>
      </div>

      <AddToCartHandler
        modal={modal}
        errorType={errorType}
        handleClose={handleClose}
      />
    </div>
  );
};

export default Card;
