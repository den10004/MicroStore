import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./pages/MainLayout/MainLayout";
import Basket from "./pages/Basket/Basket";
import NotFound from "./pages/NotFound";
import { BasketContext } from "./components/context";

function App() {
  const getLocalStorage = JSON.parse(localStorage.getItem("basket"));
  const [basketArr, setBasketArr] = useState(getLocalStorage || []);

  return (
    <div className="App">
      <BasketContext.Provider value={{ basketArr, setBasketArr }}>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BasketContext.Provider>
    </div>
  );
}

export default App;
