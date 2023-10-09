import { ArrowCircleRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";


export const Yolo = () => {
  return (
    <div>
      <h1 className="font-bold text-app-blue-200 text-3xl border-b-2 border-app-blue-200 pb-2 w-fit pr-5">
        Yolo
      </h1>
      <p className="my-5">
        YOLO is a learning centre for secondary level students looking for the best in hybrid education: access to the best international curriculums, the flexibility and autonomy of online learning combined with the interaction, motivation, and support of their pears and our team of tutors.
      </p>
      <Link
        to="https://yoloeducation.org/"
        target="_blank"
        className="btn bg-gradient-to-r border-none from-red-800 to-app-blue-200 hover:from-app-blue-200 hover:to-red-700 transition text-white"
      >
        <span>Visit the Yolo website</span>
        <span><ArrowCircleRight size={24} /></span>
      </Link>
    </div>
  );
};
