import projectImage1 from "../../assets/img/project-1.png";
import projectImage2 from "../../assets/img/project-2.png";
import projectImage3 from "../../assets/img/project-3.png";

export const SoftwaresDeveloped = () => {
  return (
    <div>
      <h1 className="font-bold text-app-blue-200 text-xl border-b-2 border-app-blue-200 pb-2 w-fit pr-5">
        Softwares Developed by Our Team
      </h1>
      <div className="w-full mt-7 flex flex-col gap-6">
        <div className="w-4/5 h-[300px] mx-auto bg-white flex flex-row shadow-md shadow-slate-400">
          <div className="w-[65%] h-full p-3">
            <h1 className="font-bold text-app-blue-200 text-lg">
              Project name 01
            </h1>
            <h2 className="font-bold text-slate-800 text-base">Function</h2>
            <p className="mt-4 text-slate-800">
              Project description. Project description. Project description.
              Project description. Project description. Project description.
              Project description. Project description. Project description.
              Project description. Project description. Project description.
              Project description. Project description. Project description.
              Project description. Project description. Project description.
              Project description.{" "}
            </p>
          </div>
          <div className="w-[35%] h-full">
            <img
              src={projectImage1}
              alt="project image"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="w-4/5 h-[300px] mx-auto bg-white flex flex-row shadow-md shadow-slate-400">
          <div className="w-[65%] h-full p-3">
            <h1 className="font-bold text-app-blue-200 text-lg">
              Project name 02
            </h1>
            <h2 className="font-bold text-slate-800 text-base">Function</h2>
            <p className="mt-4 text-slate-800">
              Project description. Project description. Project description.
              Project description. Project description. Project description.
              Project description. Project description. Project description.
              Project description. Project description. Project description.
              Project description. Project description. Project description.
              Project description. Project description. Project description.
              Project description.{" "}
            </p>
          </div>
          <div className="w-[35%] h-full">
            <img
              src={projectImage2}
              alt="project image"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="w-4/5 h-[300px] mx-auto bg-white flex flex-row shadow-md shadow-slate-400">
          <div className="w-[65%] h-full p-3">
            <h1 className="font-bold text-app-blue-200 text-lg">
              Project name 03
            </h1>
            <h2 className="font-bold text-slate-800 text-base">Function</h2>
            <p className="mt-4 text-slate-800">
              Project description. Project description. Project description.
              Project description. Project description. Project description.
              Project description. Project description. Project description.
              Project description. Project description. Project description.
              Project description. Project description. Project description.
              Project description. Project description. Project description.
              Project description.{" "}
            </p>
          </div>
          <div className="w-[35%] h-full">
            <img
              src={projectImage3}
              alt="project image"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
