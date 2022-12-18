import { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import products from "../../assets/products.json";
import Card from "../../components/Card";
import { BasketContext } from "../../components/context";
import Pagination from "react-bootstrap/Pagination";
import "./MainLayout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import Checkbox from "../../components/Checkbox";

function MainLayout() {
  const { basketArr, setBasketArr } = useContext(BasketContext);
  const [filterProd, setFilterProd] = useState(products);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basketArr));
  }, [basketArr]);

  const [activePage, setActivePage] = useState(0);
  const PAGE_LIMIT = 6;

  const pageLimit = Math.ceil(filterProd.length / PAGE_LIMIT) - 1;

  let pagItems = [];
  for (let i = 0; i <= pageLimit; i++) {
    pagItems.push(
      <Pagination.Item
        key={i}
        active={i === activePage}
        onClick={() => setActivePage(i)}
      >
        {i + 1}
      </Pagination.Item>
    );
  }
  const pagStart = activePage * PAGE_LIMIT;
  const pageEnd = pagStart + PAGE_LIMIT;

  const card = filterProd
    .slice(pagStart, pageEnd)
    .map((e, i) => (
      <Card
        key={i}
        id={e.id}
        title={e.title}
        image={e.image}
        price={e.regular_price.value}
        brand={e.brand}
        setBasketArr={setBasketArr}
        basketArr={basketArr}
      />
    ));

  return (
    <div className="wrapper">
      <header className="header">
        <div className="headerWrap">
          {" "}
          <span>Корзина </span>
          {""}
          <Link to="/basket" className="headerLink">
            <svg
              width="16px"
              height="16px"
              viewBox="0 0 16 16"
              className="bi bi-basket"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"
              />
            </svg>{" "}
            <span className="headerCount">{basketArr.length}</span>
          </Link>
        </div>
      </header>

      <div className="MainLayout">
        <div className="MainLayout__block">
          <Checkbox products={products} setFilterProd={setFilterProd} />
        </div>
        <div className="mainLayout">{card}</div>
        <Pagination className="justify-content-center paginationTop">
          {pagItems}
        </Pagination>
      </div>
    </div>
  );
}

export default MainLayout;
