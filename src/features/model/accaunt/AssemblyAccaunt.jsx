import React from "react";
import { Header } from "../../../widgets/header/Header";
import { Accaunt } from "./Accaunt";
import { Cart } from "../cart/Cart";

export const AssemblyAccaunt = () => {
  return (
    <div>
      <Header />
      <div className="acc-mid">
        <Accaunt />
        <div className="cart-acc">
          <Cart />
          <button className="buy">Оплатить</button>
        </div>
      </div>
    </div>
  );
};
