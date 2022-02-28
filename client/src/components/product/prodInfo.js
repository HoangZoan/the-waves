import { WavesButton } from "../../utils/tools";
import {
  LocalShipping,
  DoneOutline,
  SentimentDissatisfiedOutlined,
} from "@mui/icons-material";
import { userAddToCart } from "../../store/actions/users.action";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddToCartHandler from "../../utils/addToCartHandler";

const ProdInfo = (props) => {
  const { detail } = props;

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

  const showProdTags = (detail) => (
    <div className="product_tags">
      <div className="tag">
        <div>
          <LocalShipping />
        </div>

        <div className="tag_text">
          {detail.shipping ? (
            <div>Free shipping for US location</div>
          ) : (
            <div>No free shipping for US location</div>
          )}
        </div>
      </div>

      {detail.available > 0 ? (
        <div className="tag">
          <div>
            <DoneOutline />
          </div>

          <div className="tag_text">
            <div>
              <strong>
                {detail.available} products in warehouse available.
              </strong>
            </div>
          </div>
        </div>
      ) : (
        <div className="tag">
          <div>
            <SentimentDissatisfiedOutlined />
          </div>

          <div className="tag_text">
            <div>Sorry, product not available at the moment</div>
          </div>
        </div>
      )}
    </div>
  );

  const showProdActions = (detail) => (
    <div className="product_actions">
      <div className="price">$ {detail.price}</div>
      <div className="cart">
        <WavesButton
          type="add_to_cart_link"
          runAction={() => handleAddToCart(detail)}
        />
      </div>
    </div>
  );

  const showProdSpecs = (detail) => (
    <div className="product_specifications">
      <h2>Specs:</h2>
      <div>
        <div className="item">
          <strong>Frets:</strong> {detail.frets}
        </div>
        <div className="item">
          <strong>Wood:</strong> {detail.woodtype}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <h1>
        {detail.brand.name} {detail.model}
      </h1>
      <p>{detail.description}</p>

      {showProdTags(detail)}
      {showProdActions(detail)}
      {showProdSpecs(detail)}

      <AddToCartHandler
        modal={modal}
        errorType={errorType}
        handleClose={handleClose}
      />
    </div>
  );
};

export default ProdInfo;
