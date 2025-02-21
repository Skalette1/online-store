import '@/widgets/header/ui/burgerMenu/burger.css'

export const Navbar = () => {
  return (
    <div className="navbar">
      <select name="" id="">
        <option value="">Каталог</option>
        <option value="">Готовые миксы</option>
        <option value="">Отдельные виды кормов</option>
        <option value="">Готовые комплекты</option>
      </select>
      <button>О проекте</button>
      <button>Птицы</button>
      <button>Пожертвования</button>
    </div>
  );
};
