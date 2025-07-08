import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // optional icons
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "E-Comics", href: "/ecomics" },
    { label: "Categories", href: "/categories" },
    { label: "Market Place", href: "/marketPlace" },
    { label: "Library", href: "/libary" },
    { label: "Genre", href: "/genre" },
    { label: "Reel flow", href: "/reel" },
  ];

  return (
    <nav className="bg-[#4B2E00] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-yellow-400 tracking-wider">
          NOMOMICS
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`text-sm hover:underline ${
                link.active ? "underline font-semibold" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
          <a href="#" className="text-sm">
            Login
          </a>
          <a
            href="#"
            className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md text-sm"
          >
            Sign up →
          </a>
          <Link to="/profile" className="bg-white p-5 rounded-full w-10 h-10">
            <img src="" alt="profile" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-[#4B2E00] text-sm">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`block hover:underline ${
                link.active ? "underline font-semibold" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
          <a href="#" className="block">
            Login
          </a>
          <a
            href="#"
            className="block bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md w-fit"
          >
            Sign up →
          </a>
             <Link to="/profile" className="bg-white p-5 rounded-full w-10 h-10">
            <img src="" alt="profile" />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
