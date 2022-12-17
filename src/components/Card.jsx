import AddButton from "./AddButton";

function Card({
  id,
  title,
  image,
  price,
  brand,
  setBasketArr,
  basketArr,
  del,
  deleteBasket,
}) {
  const cards = {
    border: "1px solid black",
    borderRadius: "10px",
    width: "200px",
    height: "200px",
    padding: "10px",
    background: "Silver",
  };

  const cardsContent = {
    display: "flex",
    flexDirection: "column",
  };
  const cardsButton = {
    marginTop: "10px",
  };

  const addBasket = () => {
    let product = {
      id,
      image,
      title,
      price,
      brand,
    };
    setBasketArr([...basketArr, product]);
  };

  return (
    <div style={cards}>
      <div style={cardsContent}>
        <span>Бренд {brand}</span>
        <img src={image} />
        <span>Товар: {title}</span>
        <span>Цена: {price}рублей</span>
      </div>
      <div style={cardsButton}>
        <AddButton addBasket={addBasket} />
      </div>
    </div>
  );
}

export default Card;
