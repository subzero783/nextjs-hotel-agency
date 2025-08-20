"use client";
// import { useState } from "react";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
import Link from "next/link";
import { FaHotel } from "react-icons/fa";

const NavBar = () => {
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
    {
      label: "Login",
      href: "/login",
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
      <ul>
        {menu.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
