import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Buy from "/public/assets/public api/Buy.svg";

import menu from "/public/assets/public api/menu (1).png";
import { Profile } from "../model/Profile";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState();

  const navigate = useNavigate();
  const handleChange = (event) => {
    const selected = event.target.value;
    if (selected) {
      navigate(selected);
    }
  };

  return (
    <div className="navbar">
      <div className={`navbar ${isOpen ? "active" : ""}`}>
        <select name="" id="" onChange={handleChange}>
          <option value="/">Каталог</option>
          <option value="/mixes">Готовые миксы</option>
          <option value="/food">Отдельные виды кормов</option>
          <option value="/izba">Готовые комплекты</option>
        </select>
        <button>О проекте</button>
        <button>Птицы</button>
        <button>Пожертвования</button>
        <Link to="/cart">
          <img src={Buy} alt="cart" height={35} width={35} />
        </Link>
        <Profile style={{ transform: "translateX(2px)" }} />
      </div>
      <button className="burger-button" onClick={() => setIsOpen(!isOpen)}>
        <img src={menu} alt="" height={40} width={40} />
      </button>
    </div>
  );
};
