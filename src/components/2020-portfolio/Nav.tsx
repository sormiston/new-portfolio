"use client";
import ShipsWheelImg from "@public/legacy-portfolio-assets/ships-wheel.png";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function LegacyNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstNavLinkRef = useRef<HTMLAnchorElement>(null);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Handle keyboard navigation for menu links
  const handleNavLinkKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      closeMenu();
    }
  };

  // Close menu on Escape key and manage focus
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        closeMenu();
        menuButtonRef.current?.focus();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      // Focus first nav link when menu opens
      setTimeout(() => firstNavLinkRef.current?.focus(), 100);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header role="banner">
        <button
          ref={menuButtonRef}
          className={isMenuOpen ? "menu-btn close" : "menu-btn"}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="navigation-menu"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
        >
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <span className="sr-only">
            {isMenuOpen ? "Close menu" : "Open menu"}
          </span>
        </button>

        <nav
          id="navigation-menu"
          className={isMenuOpen ? "menu show" : "menu"}
          role="navigation"
          aria-label="Main navigation"
          aria-hidden={!isMenuOpen}
        >
          <div className="menu-branding close" aria-hidden="true">
            <Image
              src={ShipsWheelImg}
              alt=""
              role="presentation"
              className="filter-secondary spinner"
              width={100}
              height={100}
            />
          </div>
          <ul className="menu-nav" role="list">
            <li className="nav-item" role="listitem">
              <a
                ref={firstNavLinkRef}
                href="#landing"
                className="nav-link"
                onClick={closeMenu}
                onKeyDown={handleNavLinkKeyDown}
                aria-label="Navigate to home section"
              >
                Home
              </a>
            </li>
            <li className="nav-item" role="listitem">
              <a
                href="#about"
                className="nav-link"
                onClick={closeMenu}
                onKeyDown={handleNavLinkKeyDown}
                aria-label="Navigate to about section"
              >
                About Me
              </a>
            </li>
            <li className="nav-item" role="listitem">
              <a
                href="#work"
                className="nav-link"
                onClick={closeMenu}
                onKeyDown={handleNavLinkKeyDown}
                aria-label="Navigate to portfolio section"
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item" role="listitem">
              <a
                href="#contact"
                className="nav-link"
                onClick={closeMenu}
                onKeyDown={handleNavLinkKeyDown}
                aria-label="Navigate to contact section"
              >
                Contact
              </a>
            </li>
            <li role="separator" aria-hidden="true">
              <small>------------</small>
            </li>
            <li className="nav-item" role="listitem">
              <Link
                href="/resume"
                className="nav-link"
                onClick={closeMenu}
                onKeyDown={handleNavLinkKeyDown}
                aria-label="Navigate to resume page"
              >
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
