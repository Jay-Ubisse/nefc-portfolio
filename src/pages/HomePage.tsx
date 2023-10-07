import { NavLink } from "react-router-dom";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import logotipo from "../assets/img/logo-2.jpg";

export const HomePage = () => {
  return (
    <div className="w-screen bg-gradient-to-r from-red-800 to-app-blue-200">
      <Header />
      <main className="laptop:h-screen flex laptop:flex-row mobile:flex-col">
        <section className="laptop:w-2/5 mobile:w-full laptop:h-full bg-atranspaent flex items-center justify-center mobile:mt-5 laptop:mt-0">
          <div className="laptop:h-[75%] laptop:w-[70%] mobile:w-[90%] bg-app-blue-200 relative laptop:left-[30%] shadow-lg laptop:shadow-red-600 mobile:shadow-app-blue-100">
            <div className="w-[150px] h-[150px] mx-auto mt-10 mb-7 bg-white rounded-[50%] flex justify-center items-center">
              <img
                src={logotipo}
                alt="logo"
                className="w-[100px] overflow-scroll"
              />
            </div>
            <h1 className="text-2xl text-slate-200 font-bold text-center mb-5">
              NEFC PROJECTS LDA
            </h1>
            <hr className="h-[3px] bg-gradient-to-r from-red-700 to-violet-800 border-none w-1/4 mx-auto" />
            <h2 className="text-xl text-slate-200 text-center font-semibold my-3 mobile:mb-24 laptop:mb-3">
              General Consulting and Learning Facilitation Hub
            </h2>
            <div className="absolute bottom-0 flex justify-center items-center gap-3 bg-white h-10 text-black w-full">
              <FacebookLogo size={24} weight="fill" className="hover:text-app-blue-200 hover:cursor-pointer" />
              <TwitterLogo size={24} weight="fill" className="hover:text-app-blue-200 hover:cursor-pointer" />
              <YoutubeLogo size={24} weight="fill" className="hover:text-app-blue-200 hover:cursor-pointer" />
              <InstagramLogo size={24} weight="fill" className="hover:text-app-blue-200 hover:cursor-pointer" />
            </div>
          </div>
        </section>
        <section className="laptop:w-3/5 mobile:w-[90%] mobile:mx-auto laptop:mx-0 h-full flex items-center bg-transparent mobile:mt-10 laptop:mt-0">
          <div className="laptop:h-3/5 laptop:w-1/2 mobile:w-full laptop:ml-36 mobile:mx-auto">
            <h1 className="laptop:text-8xl mobile:text-6xl text-white font-bold mb-7">Hello,</h1>
            <h2 className="text-xl text-slate-200 font-semibold mb-3">
              <em>
                with NEFC PROJECTS LDA we work together for a better youth generation.
              </em>
            </h2>
            <div className="flex gap-5 laptop:w-4/5 mobile:w-fit mb-6 mt-10 mobile:mx-auto laptop:mx-0 font-medium">
              <NavLink
                to="/services"
                className="bg-app-blue-200 text-white rounded-full px-8 py-2 border border-app-blue-200 hover:bg-transparent hover:border-white"
              >
                Services
              </NavLink>
              <NavLink
                to="/projects"
                className="bg-transparent text-white rounded-full px-8 py-2 border border-white hover:bg-app-blue-200 hover:text-white hover:border-app-blue-200"
              >
                Projects
              </NavLink>
            </div>
            <p className="text-slate-200 laptop:text-left mobile:text-justify">
              Specializing in international business facilitation, project
              development, Education Technology development (mentoring) and
              general consulting services, our mission is to foster growth,
              innovation, and success within the young population. With
              unwavering commitment, a collaborative approach, and strong core
              values, we offer exceptional and customized cross-industry
              solutions to drive our client’s business forward.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
