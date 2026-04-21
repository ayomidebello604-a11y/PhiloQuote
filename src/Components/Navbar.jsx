import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { TbListSearch, TbMenu2, TbX } from "react-icons/tb";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/favorites", label: "Favorites" },
    { path: "/journal", label: "Journal" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex flex-row justify-between items-center p-2 md:p-4 border-b border-gray-700 bg-black">
      <div className="text-sm md:text-xl text-white italic font-semibold">PhiloQuotes</div>
      
      {/* Desktop Navigation */}
      <ul className="hidden md:flex flex-row gap-8 text-sm md:text-base">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`hover:text-gray-400 transition ${
                location.pathname === link.path ? "text-white font-bold" : "text-gray-300"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden flex gap-3 items-center">
        <BsSearch size={20} />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          {isOpen ? <TbX size={24} /> : <TbMenu2 size={24} />}
        </button>
      </div>

      {/* Desktop Search Icon */}
      <div className="hidden md:flex">
        <BsSearch size={24} />
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-gray-900 border-b border-gray-700 md:hidden">
          <ul className="flex flex-col gap-4 p-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 px-4 rounded hover:bg-gray-700 transition ${
                    location.pathname === link.path ? "text-white font-bold bg-gray-700" : "text-gray-300"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;