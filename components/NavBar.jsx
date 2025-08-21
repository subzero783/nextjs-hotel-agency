"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaHotel, FaBars } from "react-icons/fa";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let pathName = usePathname();

  const menu = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "Hotels",
      href: "/hotels",
    },
  ];

  return (
    <nav>
      <Link
        className="logo"
        href="/"
      >
        <span className="logo-image">
          <FaHotel />
        </span>
        <span className="logo-text">Treact</span>
      </Link>
      <ul className={isMobileMenuOpen === true ? "active" : ""}>
        {menu.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className={`${pathName === item.href ? "active" : ""}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
        {!isLoggedIn && (
          <li>
            <button
              href="#"
              className="login-register"
            >
              <span>Login or Register</span>
            </button>
          </li>
        )}
      </ul>
      <div
        className="menu-bars-container"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <FaBars className="menu-bars" />
      </div>
    </nav>
  );
};

export default NavBar;
