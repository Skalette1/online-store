import "@/widgets/header/styles/headerMedia.css";
import "@/widgets/header/styles/header.css";
import { Actions } from "./ui/Actions";
import { Search } from "./model/Search";
import logo from "@/shared/assets/public api/logo.svg";
import { Navbar } from "./ui/Navbar";

export const Header = () => {
  return (
    <header>
      <div className="header-top">
        <img src={logo} alt="logo" id="logo" />
        <Actions />
      </div>
      <div className="header-bottom">
        <Navbar />
        <Search />
      </div>
    </header>
  );
};
