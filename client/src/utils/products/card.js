import { renderCardImage, WavesButton } from "../../utils/tools";

const Card = (props) => {
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
            />
          </div>
          <div className="button_wrapp">btn</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
