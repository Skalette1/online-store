import React from "react";
import { Link } from "react-router-dom";

export const BuyThird = () => {
  return (
    <div>
      <div className="buy-container">
        <h2>Оплата и доставка</h2>
        <p>10% от стоимости Вашего заказа идут в фонд</p>
        <p>Способ оплаты:</p>
        <div className="oplata">
          <button></button>
          <button></button>
        </div>
        <label htmlFor="">
          <input type="checkbox" name="" id="" />
          Оформляя заказ, я даю своё согласие на обработку персональных данных и
          подтверждаю ознакомление с договором-офертой.
        </label>
        <div className="buy-footer">
          <p>
            <span>Итого:</span>228 руб.
          </p>
          <Link to="success">
            <NextBuy />
          </Link>
        </div>
      </div>
    </div>
  );
};
