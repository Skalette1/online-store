import '@/widgets/header/ui/burgerMenu/burger.css'
import { useEffect, useState } from 'react';

export const BurgerMenu = () => {

  return (
    <div className="burgerMenu">
        <input type="checkbox" name="" id="check" />
        <div className="menu menu1"></div>
        <div className="menu menu2"></div>
        <div className="menu menu3"></div>
        <div className="menu menu4"></div>
        <div className="burgerNavbar">
          <button>О проекте</button>
          <button>Птицы</button>
          <button>Пожертвования</button>
          <img src="src/shared/assets/public api/Buy.svg" alt="cart" height={35} width={35}/>
          <img src="src/shared/assets/public api/accaunt.png" alt="profile" height={35} width={35}/>
        </div>
    </div>
  );
};
