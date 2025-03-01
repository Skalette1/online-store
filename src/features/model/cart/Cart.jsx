import { useSelector } from "react-redux";
import { CartFooter } from "../../../shared/model/CartFooter";
import { BackOnMAin } from "../../../shared/model/BackOnMAin";
import "@/features/model/cart/cart.css";
import { RemoveButton } from "../../../shared/model/RemoveButton";
import { CartCounter } from "../cartCounter";
import { Link } from "react-router-dom";

export const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div>
      <BackOnMAin />
      {cartItems.length > 0 ? (
        <ul
          className="card-container"
          style={{
            display: "grid",
            gridTemplateColumns: "max-content",
          }}
        >
          {cartItems.map((item) => (
            <ul className="cart-card" key={item.id}>
              <img src={item.img} alt="" />
              <div className="cart-card-mid">
                <li key={item.id}>{item.name}</li>
                <li>
                  <span style={{ color: "#828282" }}>Итого:</span> {item.price}
                </li>
              </div>
              <div className="cart-card-footer">
                <RemoveButton item={item} />
                <CartCounter />
                <Link to="buy1">
                  <button id="buyBtn">Оплатить</button>
                </Link>
              </div>
            </ul>
          ))}
        </ul>
      ) : (
        <h1 style={{ textAlign: "center", color: "#000" }}>Корзина пуста :(</h1>
      )}
    </div>
  );
};

{
  /* {item.gramms.map((gramm) => (
                <ul key={gramm.id} className="gramms">
                  <li>{gramm.gramm1}</li>
                  <li>{gramm.gramm2}</li>
                  <li>{gramm.gramm3}</li>
                  <li>{gramm.gramm4}</li>
                </ul>
              ))} */
}
