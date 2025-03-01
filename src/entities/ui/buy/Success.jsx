import React from "react";
import { Link } from "react-router-dom";

export const Success = () => {
  return (
    <div>
      <h1>Заказ успешно оформлен</h1>
      <Link to="condition">
        <button>Спасибо!</button>
      </Link>
    </div>
  );
};
