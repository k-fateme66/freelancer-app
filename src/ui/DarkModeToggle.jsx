import React from "react";
import { HiMiniMoon, HiMiniSun } from "react-icons/hi2";
import { useDarkMode } from "../context/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return isDarkMode ? (
    <button onClick={toggleDarkMode}>
      <HiMiniSun className="w-5 h-5 text-primary-900" />
    </button>
  ) : (
    <button onClick={toggleDarkMode}>
      <HiMiniMoon className="w-5 h-5 text-primary-900" />
    </button>
  );
}

export default DarkModeToggle;
