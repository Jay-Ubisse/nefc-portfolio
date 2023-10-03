import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";
import logotipo from "../assets/img/logo.jpg";

export const Header = () => {
  const [menuState, setMenuState] = useState(false);

  return (
    <header
      className="bg-gradient-to-r from-white to-app-blue-200/20 h-32"
      id="mainHeader"
    >
      <section className="relative h-full flex justify-between items-center laptop:flex-row laptop:w-[95%] laptop:mx-auto">
        <div>
          <Link to="/" className="flex flex-row laptop:gap-1">
            <img
              src={logotipo}
              alt="logo"
              className="laptop:w-60 mobile:w-60 "
            />
          </Link>
        </div>
        <div
          className={`${
            menuState ? "mobile:flex bg-app-blue-100" : "mobile:hidden bg-transparent"
          } relative laptop:gap-2 mobile:gap-16 items-center laptop:flex laptop:flex-row-reverse mobile:flex-col mobile:w-screen laptop:w-fit mobile:h-screen laptop:h-fit mobile:overflow-scroll laptop:overflow-hidden mobile:fixed laptop:relative top-0 left-0 mobile:pt-10 laptop:pt-0 z-30`}
        >
          <div className="flex flex-row justify-end mobile:w-full laptop:w-fit">
            <X
              size={32}
              className="mr-5 laptop:hidden"
              onClick={() => setMenuState(false)}
            />
          </div>
          <nav 
            className="flex gap-6 laptop:flex-row mobile:flex-col mobile:text-xl laptop:text-lg text-center mobile:min-h-[calc(100vh-270px)] laptop:min-h-fit pr-2"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-red-700 ${
                  isActive ? "text-red-700 font-semibold" : "text-app-blue-200"
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `hover:text-red-700 ${
                  isActive ? "text-red-700 font-semibold" : "text-app-blue-200"
                }`
              }
            >
              Our Services
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `hover:text-red-700 ${
                  isActive ? "text-red-700 font-semibold" : "text-app-blue-200"
                }`
              }
            >
              Our Projects
            </NavLink>
            <NavLink
              to="/websites"
              className={({ isActive }) =>
                `hover:text-red-700 ${
                  isActive ? "text-red-700 font-semibold" : "text-app-blue-200"
                }`
              }
            >
              Our Websites
            </NavLink>
          </nav>
        </div>
        <List
          size={32}
          className="mr-5 laptop:hidden"
          onClick={() => setMenuState(true)}
        />
      </section>
    </header>
  );
};
