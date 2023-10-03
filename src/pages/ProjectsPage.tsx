import { CaretRight } from "@phosphor-icons/react";
import { useState } from "react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Algorithmics } from "../components/projects/Algorithmics";
import { Coding } from "../components/projects/Coding";
import { Yolo } from "../components/projects/Yolo";

export const ProjectsPage = () => {
    const [project, setSetProject] = useState(<Algorithmics />);
    const [projectNumber, setProjectNumber] = useState(1);
    return ( 
        <div className="bg-gradient-to-r from-red-800 to-app-blue-200 ">
            <Header />
            <main className="h-[calc(100vh-100px)] flex flex-row pt-3 pr-1 pb-1 pl-2 justify-between">
                <nav className="h-full w-[20%] bg-transparent text-white pt-10">
                    <h1 className="font-semibold text-xl text-center border-b-2 border-white pb-1 w-[70%] mx-auto mb-8">Active Projects</h1>
                    <ul className="ml-3 flex flex-col gap-4">
                        <li 
                            onClick={() => {setProjectNumber(1); setSetProject(<Algorithmics />)}}
                            className={`${
                                projectNumber === 1 ? "text-cyan-300" : "text-white"
                              } flex gap-2 items-center hover:cursor-pointer`}
                        >
                            <span>
                                <CaretRight size={20} weight="bold" />
                            </span>
                            <span>
                                Algorithmics
                            </span>
                        </li>
                        <li 
                            onClick={() => {setProjectNumber(2); setSetProject(<Coding />)}}
                            className={`${
                                projectNumber === 2 ? "text-cyan-300" : "text-white"
                              } flex gap-2 items-center hover:cursor-pointer`}
                        >
                            <span>
                                <CaretRight size={20} weight="bold" />
                            </span>
                            <span>
                                New Tech & Youth Entrepreneurship Hub
                            </span>
                        </li>
                        <li 
                            onClick={() => {setProjectNumber(3); setSetProject(<Yolo />)}}
                            className={`${
                                projectNumber === 3 ? "text-cyan-300" : "text-white"
                              } flex gap-2 items-center hover:cursor-pointer`}
                        >
                            <span>
                                <CaretRight size={20} weight="bold" />
                            </span>
                            <span>
                                Yolo
                            </span>
                        </li>
                    </ul>
                </nav>
                <article className="relative h-full w-[80%] bg-white rounded-tl-3xl p-7 overflow-y-scroll">
                    {project}
                </article>
            </main>
            <Footer />
        </div>
     );
}
 