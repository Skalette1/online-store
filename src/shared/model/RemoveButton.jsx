import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../features/model/reducers/cartCounterReducer";
export const RemoveButton = ({ item }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
  };
  return (
    <div>
      <button
        className="remove"
        onClick={removeFromCart}
        style={{
          background: "red",
          padding: ".8rem 3.8rem",
          color: "#fff",
          cursor: "pointer",
          borderRadius: ".8rem 0",
        }}
      >
        Remove
      </button>
    </div>
  );
};
