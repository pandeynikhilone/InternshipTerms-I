import React from "react";
function NGO_Home() {
  return (
    <div className="bg-[#234540] min-h-screen w-full pt-5">
      <header>
        <nav className="bg-[#395853] w-full max-w-[1140px] mx-auto rounded-3xl px-4 py-4 flex flex-col md:flex-row items-center justify-between">
          <img
            src="/Logo-1.svg"
            alt="NGO Logo"
            className="h-16 w-auto mb-4 md:mb-0"
          />
          <div className="text-white text-lg flex flex-col gap-2 md:flex-row md:gap-6">
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
        </nav>
      </header>
    </div>
  );
}
export default NGO_Home;
