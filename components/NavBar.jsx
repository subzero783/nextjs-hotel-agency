"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaHotel } from "react-icons/fa";

const NavBar = () => {
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    {
      label: "Login",
      href: "#",
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
            <Link
              href={item.href}
              className={`${pathName === item.href ? "active" : ""}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
