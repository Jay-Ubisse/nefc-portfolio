import { Link } from "react-router-dom";
import { ArrowCircleRight } from "@phosphor-icons/react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const OurWebsites = () => {
  return (
    <div className="bg-gradient-to-r from-red-800 to-app-blue-200 ">
      <Header />
      <main className="laptop:p-10 mobile:p-3">
        <h1 className="font-bold text-white text-3xl border-b-2 border-white pb-2 w-fit pr-5 mb-5">
          Our Websites
        </h1>
        <div className="flex flex-col gap-2 text-white laptop:w-3/4 mobile:w-full mx-auto">
          <Link
            to="https://nefcprojectslda.co.mz/"
            target="_blank"
            className="bg-gradient-to-r from-app-blue-200 to-red-800 shadow-slate-500 shadow-md rounded-lg hover:shadow-slate-700 flex justify-between py-5 px-5 items-center text-white hover:from-red-700 hover:to-app-blue-200"
          >
            <span className="font-semibold laptop:text-base mobile:text-sm">
                Our Corporate Website 
            </span>
            <span>
              <ArrowCircleRight size={32} weight="bold" />
            </span>
          </Link>
          <Link
            to="https://sommerschield-maputo.alg.academy/en "
            target="_blank"
            className="bg-gradient-to-r from-app-blue-200 to-red-800 shadow-slate-500 shadow-md rounded-lg hover:shadow-slate-700 flex justify-between py-5 px-5 items-center text-white hover:from-red-700 hover:to-app-blue-200"
          >
            <span className="font-semibold laptop:text-base mobile:text-sm">
                Our Algorithmics Website
            </span>
            <span>
              <ArrowCircleRight size={32} weight="bold" />
            </span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};
