import Card from "./card";

const CardBlock = ({ items, title, shop, grid }) => {
  const renderCards = () => {
    return items
      ? items.map((item, i) => {
          return <Card key={item._id} item={item} grid={grid}></Card>;
        })
      : null;
  };

  return (
    <div className={shop ? "card_block_shop" : "card_block"}>
      <div className={shop ? "" : "container"}>
        {title && <div className="title">{title}</div>}

        <div style={{ display: "flex", flexWrap: "wrap" }}>{renderCards()}</div>
      </div>
    </div>
  );
};

export default CardBlock;
