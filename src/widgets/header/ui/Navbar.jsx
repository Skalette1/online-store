import { useState } from "react";


export const Navbar = () => {
    const [isOpen, setIsOpen] = useState()
  return (
    <div className="navbar">
      <select name="" id="">
        <option value="">Каталог</option>
        <option value="">Готовые миксы</option>
        <option value="">Отдельные виды кормов</option>
        <option value="">Готовые комплекты</option>
      </select>
        <div className={`navbar ${isOpen? "active" : ""}`}>
      <button>О проекте</button>
      <button>Птицы</button>
      <button>Пожертвования</button>
        <img src="src/shared/assets/public api/Buy.svg" alt="cart" height={35} width={35}/>
        <img src="src/shared/assets/public api/Add User.svg" alt="profile" height={35} width={35} style={{transform: 'translateX(4px)'}}/>
        </div>
            <button className="burger-button" onClick={()=> setIsOpen(!isOpen)}>
                <img src="src/shared/assets/public api/menu (1).png" alt="" height={40} width={40} />
            </button>  
    </div>
  );
};
