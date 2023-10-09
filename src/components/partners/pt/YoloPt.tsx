import { ArrowCircleRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";


export const YoloPt = () => {
  return (
    <div>
      <h1 className="font-bold text-app-blue-200 text-3xl border-b-2 border-app-blue-200 pb-2 w-fit pr-5">
        Yolo
      </h1>
      <p className="my-5">
        O YOLO é um centro de aprendizagem para alunos do ensino médio que buscam o que há de melhor na educação híbrida: acesso aos melhores currículos internacionais, a flexibilidade e autonomia do aprendizado online aliada à interação, motivação e apoio de seus pares e de nossa equipe de tutores.
      </p>
      <Link
        to="https://yoloeducation.org/"
        target="_blank"
        className="btn bg-gradient-to-r border-none from-red-800 to-app-blue-200 hover:from-app-blue-200 hover:to-red-700 transition text-white"
      >
        <span>Visitar o website da Yolo</span>
        <span><ArrowCircleRight size={24} /></span>
      </Link>
    </div>
  );
};
