import { CaretRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export const Algorithmics = () => {
  return (
    <div>
      <h1 className="font-bold text-app-blue-200 text-xl border-b-2 border-app-blue-200 pb-2 w-fit pr-5">
        Algorithmics
      </h1>
      <div>
        <p className="text-slate-800 text-base my-3">
          We facilitate the learning of computer coding/programming for children
          from 6 to 17 years who are registered with Algorithmics International
          School of Programming. This program is available on a part-time basis
          and can be offered in our premises and/or at any normal school in
          Maputo.
        </p>
        <div className="flex flex-col gap-3">
          <Link
            to="#"
            className="bg-gradient-to-r from-app-blue-200 to bg-red-800 shadow-slate-500 shadow-md rounded-lg hover:shadow-slate-700 flex justify-between py-5 px-5 items-center text-white "
          >
            <span className="font-semibold laptop:text-base mobile:text-sm">
              Python Start
            </span>
            <span>
              <CaretRight size={32} weight="bold" />
            </span>
          </Link>
          <Link
            to="#"
            className="bg-gradient-to-r from-app-blue-200 to bg-red-800 shadow-slate-500 shadow-md rounded-lg hover:shadow-slate-700 flex justify-between py-5 px-5 items-center text-white "
          >
            <span className="font-semibold laptop:text-base mobile:text-sm">
              Python Pro
            </span>
            <span>
              <CaretRight size={32} weight="bold" />
            </span>
          </Link>
          <Link
            to="#"
            className="bg-gradient-to-r from-app-blue-200 to bg-red-800 shadow-slate-500 shadow-md rounded-lg hover:shadow-slate-700 flex justify-between py-5 px-5 items-center text-white "
          >
            <span className="font-semibold laptop:text-base mobile:text-sm">
              Web Designer
            </span>
            <span>
              <CaretRight size={32} weight="bold" />
            </span>
          </Link>
          <Link
            to="#"
            className="bg-gradient-to-r from-app-blue-200 to bg-red-800 shadow-slate-500 shadow-md rounded-lg hover:shadow-slate-700 flex justify-between py-5 px-5 items-center text-white "
          >
            <span className="font-semibold laptop:text-base mobile:text-sm">
              Game Designer
            </span>
            <span>
              <CaretRight size={32} weight="bold" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
