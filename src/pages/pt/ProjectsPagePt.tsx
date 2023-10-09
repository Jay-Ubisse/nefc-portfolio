import { CaretRight, DotsThreeCircleVertical } from "@phosphor-icons/react";
import { useState } from "react";

import { FooterPt } from "../../components/pt/FooterPt";
import { HeaderPt } from "../../components/pt/HeaderPt";
import { AlgorithmicsPt } from "../../components/projects/pt/AlgorithmicsPt";
import { CodingPt } from "../../components/projects/pt/CodingPt";
import { YoloPt } from "../../components/partners/pt/YoloPt";
import { WansatiLabPt } from "../../components/partners/pt/WansatiLabPt";
import { PentagonPt } from "../../components/partners/pt/PentagonPt";

export const ProjectsPagePt = () => {
    const [project, setSetProject] = useState(<AlgorithmicsPt />);
    const [projectNumber, setProjectNumber] = useState(1);
    const [menuState, setMenuState] = useState(false);
    return (
        <div className="bg-gradient-to-r from-red-800 to-app-blue-200 ">
            <HeaderPt />
            <main className="relative laptop:h-[calc(100vh-100px)] mobile:min-h-screen flex flex-row laptop:pt-3 mobile:pt-20 laptop:pr-1 pb-1 laptop:pl-2 justify-between">
                <div
                    className={`${menuState ? "mobile:hidden" : "mobile:flex"
                        } laptop:hidden fixed top-32 right-7 bg-red-700 text-white h-11 w-11 justify-center items-center rounded-[50%] z-20 shadow-lg shadow-red-700`}
                    onClick={() => setMenuState(true)}
                >
                    <DotsThreeCircleVertical size={32} />
                </div>
                <nav className={`${menuState ? "mobile:block absolute top-0 left-0 z-40 rounded-tr-3xl pr-5" : "mobile:hidden"
                    } laptop:block h-full laptop:w-[20%] mobile:w-[80%] laptop:bg-transparent mobile:bg-gradient-to-br from-red-700 to-app-blue-200 text-white pt-10`}
                >
                    <h1
                        className="font-semibold text-xl text-center border-b-2 border-white pb-1 w-[70%] mx-auto mb-8"
                    >
                        Projetos Activos
                    </h1>
                    <ul className="ml-3 flex flex-col gap-4">
                        <li
                            onClick={() => { setProjectNumber(1); setSetProject(<AlgorithmicsPt />), setMenuState(false); }}
                            className={`${projectNumber === 1 ? "text-app-blue-200 font-medium" : "text-white"
                                } flex gap-2 items-center hover:cursor-pointer`}
                        >
                            <span>
                                <CaretRight size={20} weight="bold" />
                            </span>
                            <span>
                                Algoritmo
                            </span>
                        </li>
                        <li
                            onClick={() => { setProjectNumber(2); setSetProject(<CodingPt />), setMenuState(false); }}
                            className={`${projectNumber === 2 ? "text-app-blue-200 font-medium" : "text-white"
                                } flex gap-2 items-center hover:cursor-pointer`}
                        >
                            <span>
                                <CaretRight size={20} weight="bold" />
                            </span>
                            <span>
                                Novo Centro de Empreendedorismo Tecnológico e Juvenil
                            </span>
                        </li>
                    </ul>
                    <h1
                        className="font-semibold text-xl text-center border-b-2 border-white pb-1 w-[70%] mx-auto my-8"
                    >
                        Parceiros ativos
                    </h1>
                    <ul className="ml-3 flex flex-col gap-4">
                        <li
                            onClick={() => { setProjectNumber(3); setSetProject(<YoloPt />), setMenuState(false); }}
                            className={`${projectNumber === 3 ? "text-app-blue-200 font-medium" : "text-white"
                                } flex gap-2 items-center hover:cursor-pointer`}
                        >
                            <span>
                                <CaretRight size={20} weight="bold" />
                            </span>
                            <span>
                                YOLO
                            </span>
                        </li>
                        <li
                            onClick={() => { setProjectNumber(4); setSetProject(<PentagonPt />), setMenuState(false); }}
                            className={`${projectNumber === 4 ? "text-app-blue-200 font-medium" : "text-white"
                                } flex gap-2 items-center hover:cursor-pointer`}
                        >
                            <span>
                                <CaretRight size={20} weight="bold" />
                            </span>
                            <span>
                                Pentagon Cyber Inc
                            </span>
                        </li>
                        <li
                            onClick={() => { setProjectNumber(5); setSetProject(<WansatiLabPt />), setMenuState(false); }}
                            className={`${projectNumber === 5 ? "text-app-blue-200 font-medium" : "text-white"
                                } flex gap-2 items-center hover:cursor-pointer`}
                        >
                            <span>
                                <CaretRight size={20} weight="bold" />
                            </span>
                            <span>
                                WansatiLab
                            </span>
                        </li>
                    </ul>
                </nav>
                <article className="relative laptop:h-full mobile:h-fit laptop:w-[80%] mobile:w-[95%] bg-white rounded-tl-3xl mobile:rounded-tr-3xl laptop:rounded-tr-none p-7 laptop:overflow-y-scroll mobile:mx-auto laptop:mx-0">
                    {project}
                </article>
            </main>
            <FooterPt />
        </div>
    );
}
