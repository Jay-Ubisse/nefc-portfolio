import { NavLink } from "react-router-dom";
import { FacebookLogo, InstagramLogo,TwitterLogo, YoutubeLogo } from "@phosphor-icons/react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import logotipo from "../assets/img/logo-2.jpg";

export const HomePage = () => {
  return (
    <div>
      <Header />
      <main className="h-screen w-screen bg-white flex flex-row">
        <section className="w-2/5 h-full bg-app-blue-200 flex items-center justify-center">
          <div className="h-[75%] w-[70%] bg-app-blue-100 relative left-[30%]">
            <div 
                className="w-[150px] h-[150px] mx-auto mt-10 mb-7 bg-white rounded-[50%] flex justify-center items-center"
            >
              <img
                src={logotipo}
                alt="logo"
                className="w-[100px] overflow-scroll"
              />
            </div>
            <h1 className="text-2xl text-slate-900 font-bold text-center mb-5">NEFC Projects</h1>
            <hr className="h-[3px] bg-gradient-to-r from-red-700 to-violet-800 border-none w-1/4 mx-auto" />
            <h2 className="text-xl text-slate-900 text-center font-semibold my-3">
                Accredited Algorithmics Program Provider
            </h2>
            <div className="absolute bottom-0 flex justify-center items-center gap-2 bg-white h-10 text-black w-full border border-app-blue-100">
                <FacebookLogo size={24} weight="fill" />
                <TwitterLogo size={24} weight="fill" />
                <YoutubeLogo size={24} weight="fill" />
                <InstagramLogo size={24} weight="fill" />
            </div>
          </div>
        </section>
        <section className="w-3/5 h-full flex items-center bg-white">
          <div className="h-3/5 w-1/2 ml-36">
            <h1 className="text-8xl text-slate-800 font-bold mb-7">Hello</h1>
            <h2 className="text-xl text-slate-800 font-semibold mb-3">
              Our Services and Projects
            </h2>
            <div className="flex gap-5 w-4/5 mb-6 font-medium">
              <NavLink
                to="/services"
                className="bg-app-blue-200 text-white rounded-full px-8 py-2 border border-app-blue-200 hover:bg-transparent hover:text-app-blue-200"
              >
                Services
              </NavLink>
              <NavLink
                to="/projects"
                className="bg-transparent text-app-blue-200 rounded-full px-8 py-2 border border-app-blue-200 hover:bg-app-blue-200 hover:text-white"
              >
                Projects
              </NavLink>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              animi, fugiat adipisci quod eligendi libero tenetur repellendus
              quas commodi id nihil vitae hic illo iure, deleniti dignissimos
              vel, consequatur soluta?
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
