import React from "react";
import { NextBuy } from "../../../shared/model/NextBuy";
import { Link } from "react-router-dom";
export const BuyFirst = () => {
  return (
    <div className="buy-container">
      <h2>Оплата и доставка</h2>
      <p>10% от стоимости Вашего заказа идут в фонд</p>
      <input type="text" placeholder="ФИО" />
      <input type="tel" placeholder="Телефон" />
      <input type="email" placeholder="E-mail" />
      <div className="buy-footer">
        <p>
          <span>Итого:</span>228 руб.
        </p>
        <Link to="buy2">
          <NextBuy />
        </Link>
      </div>
    </div>
  );
};
