import "@/widgets/header/ui/header.css";
import "@/widgets/header/headerMedia.css";
import { Actions } from "./ui/Actions";
import { Search } from "./model/Search";
import logo from "@/shared/assets/public api/logo.svg";
import { Navbar } from "./ui/Navbar";
import { BurgerMenu } from "./ui/burgerMenu/burgerMenu";

export const Header = () => {
  return (
    <header>
      <div className="header-top">
        <img src={logo} alt="logo" />
        <Actions />
      </div>
      <div className="header-bottom">
        <BurgerMenu />
        <Navbar />
        <Search />
      </div>
    </header>
  );
};
