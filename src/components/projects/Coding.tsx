import { CaretRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export const Coding = () => {
  return (
    <div>
      <h1 className="font-bold text-app-blue-200 text-xl border-b-2 border-app-blue-200 pb-2 w-fit pr-5">
        New Tech & Youth Entrepreneurship Hub
      </h1>
      <div>
        <p className="text-slate-800 text-base my-3">
          We offer mentorship services to youth and adults interested in
          acquiring and developing skills in the fields of computer coding, 3D
          universe, basics of cybersecurity and other new technology and
          business entrepreneurship development. We also offer our facility to
          those who are doing or want to do distance learning with international
          online platforms; we mentor and guide them through the whole learning
          process.
        </p>
        <div className="flex flex-col gap-3">
          <Link
            to="#"
            className="bg-gradient-to-r from-app-blue-200 to bg-red-800 shadow-slate-500 shadow-md rounded-lg hover:shadow-slate-700 flex justify-between py-5 px-5 items-center text-white "
          >
            <span className="font-semibold laptop:text-base mobile:text-sm">
              Java
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
              Mobile Development
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
              Web Development
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
              Basics of Cyber Security
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
              Other ICT skills development materials.
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
