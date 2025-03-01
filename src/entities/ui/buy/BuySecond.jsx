import React from "react";
import { Link } from "react-router-dom";

export const BuySecond = () => {
  return (
    <div className="buy-container">
      <h2>Оплата и доставка</h2>
      <p>10% от стоимости Вашего заказа идут в фонд</p>
      <input type="text" placeholder="Адрес доставки" />
      <label htmlFor="">
        Желаемая дата доставки
        <input type="date" placeholder="Вторник, 31 сентября" />
      </label>
      <label htmlFor="">
        Комментарий к заказу
        <input type="text" placeholder="Комментарий" />
      </label>
      <div className="buy-footer">
        <p>
          <span>Итого:</span>228 руб.
        </p>
        <Link to="buy3">
          <NextBuy />
        </Link>
      </div>
    </div>
  );
};
