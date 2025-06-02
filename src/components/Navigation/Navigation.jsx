import { NavLink, Link } from "react-router-dom";
import style from "./Navigation.module.css";
import logo from "../../images/Logo.svg";

const navClasses = ({ isActive }) => (isActive ? style.active : "");

const Navigation = () => {
  return (
    <header className={style.headerdiv}>
      <Link href="/">
        <img src={logo} alt="Home" />
      </Link>
      <div className={style.headerdiv}>
        <NavLink to="/" className={navClasses}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={navClasses}>
          Catalog
        </NavLink>
      </div>
    </header>
  );
};

export default Navigation;
