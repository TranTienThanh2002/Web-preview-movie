import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import "./Header.css";
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const addBg = () => {
    if (window.scrollY >= 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  window.addEventListener("scroll", addBg);

  return (
    <>
      <header className={isScrolled ? "fixed-header" : "header"}>
        <Navbar isScrolled={isScrolled} />
      </header>
    </>
  );
};
