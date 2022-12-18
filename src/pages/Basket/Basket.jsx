import { Link } from "react-router-dom";
import BasketCard from "../../components/BasketCard";
import React, { useContext } from "react";
import { BasketContext } from "../../components/context";
import axios from "axios";
import "./Basket.css";
import "../../App.css";

function Basket() {
  const { basketArr, setBasketArr } = useContext(BasketContext);

  const deleteBasket = (index) => {
    const temp = [...basketArr];
    temp.splice(index, 1);
    setBasketArr(temp);
  };

  async function payBasket() {
    try {
      const resp = await axios.post("https://app.aaccent.su/js/confirm.php");
      console.log(resp.data);
      alert("покупка успешно оплачена", resp.data);
    } catch (err) {
      console.error(err);
    }
  }
  const sumPrice = basketArr.reduce((n, { price }) => n + price, 0).toFixed(2);
  return (
    <div>
      <header>
        <Link to="/">Главная</Link>
        <h1>Корзина</h1>
      </header>

      <div className="basketWrapper">
        {basketArr ? (
          basketArr.map((e, index) => (
            <>
              <BasketCard
                key={index}
                image={e.image}
                title={e.title}
                price={e.price}
                del={true}
                deleteBasket={() => deleteBasket(index)}
              />
            </>
          ))
        ) : (
          <span>Ошибка</span>
        )}

        {basketArr.length !== 0 ? (
          <div className="basketTotal">
            <span>
              Количество товаров: <strong>{basketArr.length} </strong>
            </span>
            <span>
              Стоимость товаров: <strong>{sumPrice} рублей</strong>
            </span>
            <button className="button colorGreen buttonTop" onClick={payBasket}>
              Оплатить
            </button>
          </div>
        ) : (
          <span>Товаров нет в списке</span>
        )}
      </div>
    </div>
  );
}

export default Basket;
