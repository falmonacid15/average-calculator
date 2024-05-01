import { LiaNewspaper } from "react-icons/lia";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  return (
    <div className="navbar bg-base-light-300 dark:bg-base-dark-300">
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <LiaNewspaper className="text-3xl mt-3 mr-2 text-sky-600 dark:text-sky-300" />
        <h1 className="text-2xl font-bold mt-2 text-gray-900 dark:text-gray-300">
          MiPromedio
        </h1>
      </div>
      <div className="navbar-end">
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Navbar;
