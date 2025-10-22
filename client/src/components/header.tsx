import { Link } from "react-router";
import * as React from "react";
import { FaAlignJustify } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    React.useState<boolean>(false);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string
  ) => {
    e.preventDefault();

    const targetId = hash.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.pushState(null, "", hash);
    }

    closeMobileMenu();
  };

  const headerData = [
    {
      title: "Home",
      link: "#home",
    },
    {
      title: "Location",
      link: "#location",
    },
    {
      title: "Layout",
      link: "#layout",
    },
    {
      title: "Gallery",
      link: "#gallery",
    },
    {
      title: "VR View",
      link: "#vrview",
    },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`shadow-2xl sticky z-50 top-0 bg-black flex justify-between px-4 md:px-36 py-4 md:py-8 ${
        isMobileMenuOpen ? `bg-secondary items-start` : `items-center`
      } text-white`}
    >
      <div className={isMobileMenuOpen ? "hidden sm:block" : "block"}>
        <span>
          <img
            src="/assets/logo_1.webp"
            alt="LogoFull1"
            className="h-10 md:h-16 w-auto"
          />
        </span>
      </div>

      <nav className="hidden sm:block">
        <section className="flex items-center text-xl gap-4">
          {headerData.map((data, index) => (
            <Link
              onClick={(e) => handleScroll(e, data.link)}
              to={data.link}
              key={index}
              className={`
                px-2 py-1
                transform
                transition
                duration-500
                ease-in-out
                hover:scale-105
                hover:text-accent
              `}
            >
              {data.title}
            </Link>
          ))}
        </section>
      </nav>

      <div className="sm:hidden z-50">
        <button
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          className="text-2xl p-2 focus:outline-none transition"
        >
          {isMobileMenuOpen ? <IoClose /> : <FaAlignJustify />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="bg-secondary top-0 left-0 w-full h-screen bg-color-secondary text-white flex flex-col items-center justify-start py-12 space-y-8 z-60 transition-opacity duration-300 animate-fade-in">
          <nav className="grid flex-col items-center text-center space-y-6 text-xl">
            {headerData.map((data, index) => (
              <Link
                onClick={(e) => handleScroll(e, data.link)}
                to={data.link}
                key={index}
                className="hover:text-secondary transition duration-300"
              >
                {data.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
