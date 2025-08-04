import React, { useState } from "react";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="w-full pt-5 Lato">
      <header>
        <nav className="bg-[#395853] w-full max-w-[1140px] mx-auto rounded-3xl px-4 py-4 flex md:flex-row items-center justify-between">
          <img
            src="/Logo-1.svg"
            alt="NGO Logo"
            className="h-16 w-auto mb-4 md:mb-0"
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex text-white text-lg gap-6">
            {["Home", "About", "Services", "Projects", "Contact"].map(
              (label) => (
                <a
                  key={label}
                  href="#"
                  className="hover:text-[#fdb235] transition-colors duration-200"
                >
                  {label}
                </a>
              )
            )}
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            {menuOpen ? (
              // Cross Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Menu Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5M3.75 9.75h16.5M3.75 14.25h16.5M3.75 18.75h16.5"
                />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden text-center flex flex-col gap-4 bg-[#395853] text-white text-lg p-4 rounded-b-3xl">
            {["Home", "About", "Services", "Projects", "Contact"].map(
              (label) => (
                <a
                  key={label}
                  href="#"
                  onClick={closeMenu}
                  className="hover:text-[#fdb235] transition-colors duration-200"
                >
                  {label}
                </a>
              )
            )}
          </div>
        )}
      </header>
    </div>
  );
}

export default Navigation;
