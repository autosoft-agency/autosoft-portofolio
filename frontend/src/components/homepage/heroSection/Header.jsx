import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // menu & close icons
import logo from "../../../assets/logo.png";
import SocialIcons from "./SocialIcons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Effect to close menu on screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false); // Close menu if screen is resized to a larger size
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="relative z-20 flex justify-between items-center p-4 text-white">
      <img src={logo} alt="AutoSoft Logo" className="h-12 w-auto" />

      {/* Navigation Links - Hidden on small screens */}
      <nav className="hidden md:block">
        <ul className="flex gap-4">
          <li>
            <Link to="/about" className="hover:text-blue-500">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-blue-500">
              Services
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="hover:text-blue-500">
              Our Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Social Icons - Hidden on small screens */}
      <div className="hidden md:block">
        <SocialIcons />
      </div>

      {/* Menu Icon for Small Screens */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Dropdown Menu - Visible on small screens */}
      {isMenuOpen && (
        <div>
          {/* Overlay with Blur Effect */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-10"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Menu */}
          <div
            className={`fixed top-0 left-3/4 transform -translate-x-1/2 w-1/2 h-1/2 bg-gradient-to-b from-blue-900 to-transparent text-white z-20 p-4 shadow-lg flex flex-col transition-all duration-300 ease-in-out ${
              isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
            }`}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-2xl"
            >
              <FaTimes />
            </button>

            {/* Navigation Links */}
            <ul className="flex flex-col gap-4 mt-12">
              <li>
                <Link
                  to="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-blue-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-blue-500"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-blue-500"
                >
                  Our Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-blue-500"
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="mt-auto flex justify-center">
              <SocialIcons />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;