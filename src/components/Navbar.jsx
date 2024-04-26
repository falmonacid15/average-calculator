import React from "react";
import { LiaNewspaper } from "react-icons/lia";

const Navbar = () => {
  return (
    <div className="bg-base-light-300 dark:bg-base-dark-300 text-gray-950 dark:text-gray-50 h-14 sticky shadow-lg">
      <div className="flex items-center justify-center">
        <LiaNewspaper className="text-3xl mt-3 mr-2 text-sky-600 dark:text-sky-300" />
        <h1 className="text-2xl font-bold mt-2 text-gray-900 dark:text-gray-300">
          MiPromedio
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
