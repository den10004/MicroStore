import AddButton from "./AddButton";

function BasketCard({
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
    width: "800px",
    height: "200px",
    padding: "10px",
    background: "Silver",
    marginBottom: "10px",
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
        <AddButton del={del} deleteBasket={deleteBasket} />
      </div>
    </div>
  );
}

export default BasketCard;
