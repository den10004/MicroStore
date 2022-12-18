import { useState } from "react";
import "../App.css";
import "../pages/MainLayout/MainLayout.css";

function Checkbox({ products, setFilterProd }) {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);

  const [spred, setSpred] = useState([]);
  const [spred2, setSpred2] = useState([]);
  const [spred3, setSpred3] = useState([]);
  const [spred4, setSpred4] = useState([]);
  const x = [...spred, ...spred2, ...spred3, ...spred4];

  const handleCheckbox = () => {
    setChecked(!checked);
    if (!checked) {
      const brandFilter = products.filter((item) => item.brand === 1);
      setSpred(brandFilter);
    } else {
      setSpred([]);
    }
  };

  const handleCheckbox2 = () => {
    setChecked2(!checked2);
    if (!checked2) {
      const brandFilter2 = products.filter((item) => item.brand === 2);
      setSpred2(brandFilter2);
    } else {
      setSpred2([]);
    }
  };

  const handleCheckbox3 = () => {
    setChecked3(!checked3);
    if (!checked3) {
      const brandFilter3 = products.filter((item) => item.brand === 3);
      setSpred3(brandFilter3);
    } else {
      setSpred3([]);
    }
  };

  const handleCheckbox4 = () => {
    setChecked4(!checked4);
    if (!checked4) {
      const brandFilter4 = products.filter((item) => item.brand === 4);
      setSpred4(brandFilter4);
    } else {
      setSpred4([]);
    }
  };

  const Apply = () => {
    setFilterProd(x);
  };

  const Cancel = () => {
    setFilterProd(products);
    setChecked(false);
    setChecked2(false);
    setChecked3(false);
    setChecked4(false);
    setSpred([]);
    setSpred2([]);
    setSpred3([]);
    setSpred4([]);
  };

  return (
    <div className="MainLayout__block">
      <div className="checkBox">
        <div>
          <input type="checkbox" checked={checked} onChange={handleCheckbox} />
          Brand 1
        </div>
        <div>
          <input
            type="checkbox"
            checked={checked2}
            onChange={handleCheckbox2}
          />
          Brand 2
        </div>
        <div>
          <input
            type="checkbox"
            checked={checked3}
            onChange={handleCheckbox3}
          />
          Brand 3
        </div>
        <div>
          <input
            type="checkbox"
            checked={checked4}
            onChange={handleCheckbox4}
          />
          Brand 4
        </div>
      </div>
      <div className="buttonsBlock">
        <button
          className="button"
          disabled={!checked && !checked2 && !checked3 && !checked4}
          onClick={Apply}
        >
          Применить
        </button>
        <button onClick={Cancel} className="button">
          Сбросить
        </button>
      </div>
    </div>
  );
}

export default Checkbox;
