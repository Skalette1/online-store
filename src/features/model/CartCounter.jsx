import "@/features/model/cart/cart.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./reducers/cartCounterReducer";

export const CartCounter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.count);
  const disabled = counter <= 0;
  return (
    <div>
      <p style={{ color: "#BDBDBD" }}>Количество:</p>
      <div className="counter-mid">
        <button
          className="counter"
          onClick={() => dispatch(decrement())}
          disabled={disabled}
        >
          -
        </button>
        <p>{counter}</p>
        <button className="counter" onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
    </div>
  );
};
