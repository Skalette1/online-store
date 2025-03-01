import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./reducers/cartReducer";

export const CartCounter = ({ itemId }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const item = cartItems.find((item) => item.id === itemId);

  if (!item) return null;

  const disabled = item.quantity <= 1; // Кнопка "-" отключается, если количество 1

  return (
    <div className="counter-container">
      <p style={{ color: "#BDBDBD" }}>Количество:</p>
      <div className="counter-mid">
        <button
          className="counter"
          onClick={() => dispatch(decrement(itemId))} // Передаем itemId
          disabled={disabled}
        >
          -
        </button>
        <p>{item.quantity}</p>
        <button className="counter" onClick={() => dispatch(increment(itemId))}>
          +
        </button>
      </div>
    </div>
  );
};
