import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";
import { Switch } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import logotipo from "../../assets/img/logo.jpg";

export const HeaderPt = () => {
  const [menuState, setMenuState] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const navigate = useNavigate();

  function changeLanguage() {
    setEnabled(!enabled)
    navigate('/')
  }

  return (
    <header
      className="h-32"
      id="mainHeader"
    >
      <section className="relative h-full flex justify-between items-center laptop:flex-row w-[95%] mx-auto">
        <div>
          <Link to="/" className="flex flex-row laptop:gap-1">
            <img
              src={logotipo}
              alt="logo"
              className="laptop:w-60 mobile:w-40"
            />
          </Link>
        </div>
        <div
          className={`${menuState ? "mobile:flex bg-gradient-to-tr from-red-800 to-app-blue-200" : "mobile:hidden bg-transparent"
            } laptop:gap-2 mobile:gap-16 items-center laptop:flex laptop:flex-row-reverse mobile:flex-col mobile:w-screen laptop:w-fit mobile:h-screen laptop:h-fit laptop:overflow-hidden mobile:fixed laptop:relative top-0 left-0 mobile:pt-10 laptop:pt-0 z-30`}
        >
          <div className="flex flex-row justify-end mobile:w-full laptop:w-fit mobile:pb-12 laptop:pb-0">
            <X
              size={32}
              color="white"
              className="mr-5 laptop:hidden"
              onClick={() => setMenuState(false)}
            />
          </div>
          <div className="text-white flex flex-row items-center gap-3 border-l border-white pl-3">
            <span>EN</span>
            <Switch
              checked={enabled}
              onChange={() => changeLanguage()}
              className={`${enabled ? 'bg-teal-700' : 'bg-teal-900'} relative inline-flex w-[64px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${enabled ? 'translate-x-0' : 'translate-x-9'} pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>
            <span>PT</span>
          </div>
          <nav
            className="flex gap-6 laptop:flex-row mobile:flex-col mobile:text-xl laptop:text-lg text-center mobile:min-h-[calc(100vh-270px)] laptop:min-h-fit pr-2"
          >
            <NavLink
              to="/pt"
              className={({ isActive }) =>
                `hover:text-red-700 ${isActive ? "text-red-700 font-semibold" : "text-white"
                }`
              }
            >
              Sobre nós
            </NavLink>
            <NavLink
              to="/pt/services"
              className={({ isActive }) =>
                `hover:text-red-700 ${isActive ? "text-red-700 font-semibold" : "text-white"
                }`
              }
            >
              Nossos Serviços
            </NavLink>
            <NavLink
              to="/pt/projects"
              className={({ isActive }) =>
                `hover:text-red-700 ${isActive ? "text-red-700 font-semibold" : "text-white"
                }`
              }
            >
              Nossos Projectos
            </NavLink>
            <NavLink
              to="/pt/websites"
              className={({ isActive }) =>
                `hover:text-red-700 ${isActive ? "text-red-700 font-semibold" : "text-white"
                }`
              }
            >
              Nossos Websites
            </NavLink>
          </nav>
        </div>
        <List
          size={32}
          color="white"
          className="mr-5 laptop:hidden"
          onClick={() => setMenuState(true)}
        />
      </section>
    </header>
  );
};
