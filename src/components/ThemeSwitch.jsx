import React, { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState("light");

  function ChangeTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);
  return (
    <label className="swap swap-rotate mr-3">
      {/* this hidden checkbox controls the state */}
      <input type="checkbox" onChange={ChangeTheme} />

      {/* sun icon */}
      <LuSun className="swap-off fill-current w-7 h-7 text-base-light-content dark:text-base-dark-content" />

      {/* moon icon */}
      <LuMoon className="swap-on fill-current w-7 h-7 text-base-light-content dark:text-base-dark-content" />
    </label>
  );
};

export default ThemeSwitch;
