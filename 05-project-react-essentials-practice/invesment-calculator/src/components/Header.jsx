import React from "react";
import logo from "../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <header className="flex flex-col items-center my-12 gap-4 text-center">
      <img
        src={logo}
        alt="Logo showing money bag"
        className="w-24 h-24 bg-transparent object-contain drop-shadow-lg"
      />
      <h1 className="text-4xl font-condensed font-bold text-[#83e6c0] tracking-wide">
        Investment Calculator
      </h1>
    </header>
  );
};

export default Header;
