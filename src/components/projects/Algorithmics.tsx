import { CaretRight } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "react-router-dom";

import ProjectImage from "../../assets/img/ProjectImage.png";

const titles = [
  "Coding Knight (6 - 7 years)",
  "Digital Literacy (6 - 9 years)",
  "Visual Programming (8 - 10 years)",
  "Building website (11 - 13 years)",
  "Python Start (12 - 13 years)",
  "Python Pro (14 - 17 years)",
];

const contents = [
  "Children will learn how to make sense of the basic principles of programming, create games and cartoons in Scratch Junior, approach problem-solving creativity, talk about their projects in front of the group confidence and work in a team on joint tasks and projects.",
  "This is a skill that every modern child needs. Children will learn how to work with text documents and type fast, put together presentations, prepare oral presentation, present information in the form of tablets and infographics, search for trustworthy information online and project their personal data, register on websites, and use email and cloud storage services. They will also learn how to work with a graphical editor and create digital pictures.",
  "Children will learn about the basic concepts and practices involved in programming (from creating algorithms to correcting errors). They will learn how to create cartoons and games in the block-based programming language scratch, making their stories more sophisticated as their knowledge grows. They will finally learn how to apply the main principles of graphic design and vector graphics in practice. They will also learn how to work in team, not to fear public speaking and confidently present their projects in front a live audience.",
  "This course is very interesting for children. They learn how to develop designs in Figma and create websites in the block-based builder, Tilda. They will learn how to write HTML and CSS code, publish their website using GitHub pages. They will create designs for interfaces and adapt their websites for mobile devices.",
  "This course normally takes two years to complete the whole program taking into account that it’s a part-time curriculum. This is the course that teaches children to start programming on a serious and solid note. Teenagers will learn to understand the basics of algorithms and object-oriented; develop interactive graphical games for PCs using the PyGame library; work with graphics and use the Turtle library. They will also learn how to solve real tasks using Python and apply an interactive approach.",
  "This is the bridge course to professionalism. This two years course will enable children to code in Python and test their skills in the most sough-after IT fields from game development to machine learning expertise. During the second year, children will be introduced to the world of 3D games, design scenes and animate characters. They will also learn how to develop mobile applications and they will acquire other interesting skills.",
];

export const Algorithmics = () => {
  const [title, setTitle] = useState(titles[0]);
  const [content, setConent] = useState(contents[0]);
  const [visibility, setVisibility] = useState(false);

  function displayCardContent(contentNumber: number) {
    setTitle(titles[contentNumber]);
    setConent(contents[contentNumber]);
    setVisibility(true);
  }

  function closeCardContent() {
    setVisibility(false);
  }

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
            onClick={() => displayCardContent(0)}
          >
            <span className="font-semibold laptop:text-base mobile:text-sm">
              Coding Knight (6 - 7 years)
            </span>
            <span>
              <CaretRight size={32} weight="bold" />
            </span>
          </Link>
          <Link
            to="#"
            className="bg-gradient-to-r from-app-blue-200 to bg-red-800 shadow-slate-500 shadow-md rounded-lg hover:shadow-slate-700 flex justify-between py-5 px-5 items-center text-white "
            onClick={() => displayCardContent(1)}
          >
            <span className="font-semibold laptop:text-base mobile:text-sm">
              Digital Literacy (6 - 9 years)
            </span>
            <span>
              <CaretRight size={32} weight="bold" />
            </span>
          </Link>
          <Link
            to="#"
            className="bg-gradient-to-r from-app-blue-200 to bg-red-800 shadow-slate-500 shadow-md rounded-lg hover:shadow-slate-700 flex justify-between py-5 px-5 items-center text-white "
            onClick={() => displayCardContent(2)}
          >
            <span className="font-semibold laptop:text-base mobile:text-sm">
              Visual Programming (8 - 10 years)
            </span>
            <span>
              <CaretRight size={32} weight="bold" />
            </span>
          </Link>
          <Link
            to="#"
            className="bg-gradient-to-r from-app-blue-200 to bg-red-800 shadow-slate-500 shadow-md rounded-lg hover:shadow-slate-700 flex justify-between py-5 px-5 items-center text-white "
            onClick={() => displayCardContent(3)}
          >
            <span className="font-semibold laptop:text-base mobile:text-sm">
              Building website (11 - 13 years)
            </span>
            <span>
              <CaretRight size={32} weight="bold" />
            </span>
          </Link>
          <Link
            to="#"
            className="bg-gradient-to-r from-app-blue-200 to bg-red-800 shadow-slate-500 shadow-md rounded-lg hover:shadow-slate-700 flex justify-between py-5 px-5 items-center text-white "
            onClick={() => displayCardContent(4)}
          >
            <span className="font-semibold laptop:text-base mobile:text-sm">
              Python Start (12 - 13 years)
            </span>
            <span>
              <CaretRight size={32} weight="bold" />
            </span>
          </Link>
          <Link
            to="#"
            className="bg-gradient-to-r from-app-blue-200 to bg-red-800 shadow-slate-500 shadow-md rounded-lg hover:shadow-slate-700 flex justify-between py-5 px-5 items-center text-white "
            onClick={() => displayCardContent(5)}
          >
            <span className="font-semibold laptop:text-base mobile:text-sm">
              Python Pro (14 - 17 years)
            </span>
            <span>
              <CaretRight size={32} weight="bold" />
            </span>
          </Link>
          <div
            className={`${
              visibility ? "block" : "hidden"
            } absolute top-2 left-[30%] card w-96 shadow-xl bg-slate-300 p-4`}
          >
            <figure>
              <img src={ProjectImage} alt="Project Image" />
            </figure>
            <div className="card-body mt-3 p-1">
              <h2 className="card-title">{title}</h2>
              <p>{content}</p>
              <div className="card-actions justify-end mt-4">
                <button 
                  className="btn bg-slate-400 border-none"
                  onClick={() => closeCardContent()}
                >
                  Close
                </button>
                <button 
                  className="btn bg-gradient-to-r border-none from-red-800 to-app-blue-200 hover:from-app-blue-200 hover:to-red-700 transition text-white"
                >
                  Know more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
