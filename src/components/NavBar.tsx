"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/Images/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-[#11793D] fixed top-0 left-0 z-[9999] w-full overflow-hidden">
      <div className="container lg:max-w-screen-xl max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between py-4">
          <Link href="/" className="font-bold text-2xl lg:text-3xl degradado-texto">
            <Image src={logo} alt="Logo" width={100} height={30} />
          </Link>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 text-sm text-[#120844] rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-[#8CD767]"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5  stroke-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div
            className={`lg:flex w-full lg:my-0 my-4 lg:w-auto ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col lg:flex-row items-start lg:items-center lg:space-x-8 gap-4 lg:gap-0 p-4 lg:p-0">
              <li>
                <Link
                  href="/"
                  className="py-2 px-3 text-base text-[#ffffff] hover:text-[#8CD767] rounded md:bg-transparent md:p-0"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="py-2 px-3 text-base text-[#ffffff] hover:text-[#8CD767] rounded md:bg-transparent md:p-0"
                >
                  Servicios disponibles
                </Link>
              </li>
              <li>
                <Link
                  href="#comofunciona"
                  className="py-2 px-3 text-base text-[#ffffff] hover:text-[#8CD767] rounded md:bg-transparent md:p-0"
                >
                  ¿Cómo funciona?
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+17877107426"
                  className="py-2 px-3 text-base text-[#ffffff] hover:text-[#8CD767] rounded md:bg-transparent md:p-0"
                >
                  Contáctenos
                </Link>
              </li>
              <li>
                <Link
                  href="https://app.tulicenciapr.com/registro"
                  className="py-2 px-3 text-base text-[#ffffff] hover:text-[#8CD767] rounded md:bg-transparent md:p-0"
                >
                  Registrarse
                </Link>
              </li>
              <li>
                <Link
                  href="https://app.tulicenciapr.com"
                  className="block py-2 px-3 max-w-[148px] text-[#ffffff] text-center text-[17px] lg:border border lg:py-[8px] lg:px-[32px] border-solid rounded-[50px] border-[#ffffff] hover:border-[#ffffff] hover:bg-[#509920] hover:text-white transition-all duration-300 ease-in-out"
                >
                  Ingresar
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
