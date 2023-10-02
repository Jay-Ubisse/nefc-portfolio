import { Link } from "react-router-dom";
import { ArrowCircleRight } from "@phosphor-icons/react";
import ProjectImage1 from "../../assets/img/project-1.png";

export const Yolo = () => {
  return (
    <div>
      <h1 className="font-bold text-app-blue-200 text-3xl border-b-2 border-app-blue-200 pb-2 w-fit pr-5">
        Yolo
      </h1>
      <div className="w-full mt-7 flex flex-col gap-6">
        <div className="w-4/5 h-[300px] mx-auto bg-white flex flex-row shadow-md shadow-slate-400">
          <div className="w-[65%] h-full p-3">
            <p className="mt-4 text-slate-800">
              Yolo description. Yolo description. Yolo description.
              Yolo description. Yolo description. Yolo description.
              Yolo description. Yolo description. Yolo description.
              Yolo description. Yolo description. Yolo description.
              Yolo description. Yolo description. Yolo description.
              Yolo description. Yolo description. Yolo description.
              Yolo description.{" "}
            </p>
            <Link
              to="#"
              className="bg-gradient-to-r from-red-800 to-app-blue-200 flex flex-row items-center px-3 py-2 rounded gap-3 w-fit text-white font-medium mt-14 hover:from-app-blue-200 hover:to-red-700 transition"
            >
              <span>
                Visit Yolo Website
              </span>
              <span>
                <ArrowCircleRight />
              </span>
            </Link>
          </div>
          <div className="w-[35%] h-full">
            <img
              src={ProjectImage1}
              alt="Yolo image"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
