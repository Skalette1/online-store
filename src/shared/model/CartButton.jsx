import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/model/reducers/cartReducer";
import Buy from "/public/assets/public api/Buy.svg";
export const CartButton = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };
  return (
    <div
      style={{
        background: "transparent",
      }}
    >
      <button
        onClick={handleAddToCart}
        style={{
          cursor: "pointer",
        }}
      >
        <img
          src={Buy}
          alt="cart"
          style={{
            background: "transparent",
            height: "40px",
            width: "45px",
          }}
        />
      </button>
    </div>
  );
};
