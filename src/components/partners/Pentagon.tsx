import { ArrowCircleRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";


export const Pentagon = () => {
  return (
    <div>
      <h1 className="font-bold text-app-blue-200 text-3xl border-b-2 border-app-blue-200 pb-2 w-fit pr-5">
        Pentagon Cyber Inc
      </h1>
      <p className="my-5">
        Working with Pentagon Cyber, Inc. will minimize your exposure to the rapidly developing cyber-risks and help build your clients confidence in your organizations commitment to their safety.
      </p>
      <Link
        to="https://www.pentagon-cyber.com/"
        target="_blank"
        className="btn bg-gradient-to-r border-none from-red-800 to-app-blue-200 hover:from-app-blue-200 hover:to-red-700 transition text-white"
      >
        <span>Visit the Pentagon website</span>
        <span><ArrowCircleRight size={24} /></span>
      </Link>
    </div>
  );
};
