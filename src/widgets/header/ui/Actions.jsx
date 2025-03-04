import { Link } from "react-router-dom";
import { Profile } from "../model/Profile";
import phone from "/assets/public api/phone.png";
import buy from "/public/assets/public api/Buy.svg";
export const Actions = () => {
  return (
    <div className="actions">
      <img src={phone} alt="phone" id="phone" />
      <div className="actions-bottom">
        <Link to="cart">
          <img src={buy} alt="cart" height={35} width={35} />
        </Link>
        <Profile />
      </div>
    </div>
  );
};
