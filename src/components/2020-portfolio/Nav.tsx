"use client";
import ShipsWheelImg from "@public/legacy-portfolio/ships-wheel.png";
import Image from "next/image";
import { useState } from "react";

export default function LegacyNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header>
        <button
          className={isMenuOpen ? "menu-btn close" : "menu-btn"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          onKeyUp={({ code }) => code === "Enter" && setIsMenuOpen(!isMenuOpen)}
        >
          <div className="btn-line"></div>
          <div className="btn-line"></div>

          <div className="btn-line"></div>
        </button>

        <nav className={isMenuOpen ? "menu show" : "menu"}>
          <div className="menu-branding close">
            <Image
              src={ShipsWheelImg}
              alt="Ships wheel logo"
              className="filter-secondary spinner"
              width={100}
              height={100}
            />
          </div>
          <ul className="menu-nav">
            <li className="nav-item current">
              <a href="#landing" className="nav-link">
                {" "}
                Home{" "}
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                {" "}
                About Me{" "}
              </a>
            </li>
            <li className="nav-item">
              <a href="#work" className="nav-link">
                {" "}
                Portfolio{" "}
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                {" "}
                Contact{" "}
              </a>
            </li>
            <small>------------</small>
            <li className="nav-item">
              <a href="/resume" className="nav-link">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
