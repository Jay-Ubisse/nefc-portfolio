import { ArrowCircleRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";


export const PentagonPt = () => {
  return (
    <div>
      <h1 className="font-bold text-app-blue-200 text-3xl border-b-2 border-app-blue-200 pb-2 w-fit pr-5">
        Pentagon Cyber Inc
      </h1>
      <p className="my-5">
        Trabalhar com a Pentagon Cyber, Inc. minimizará sua exposição aos riscos cibernéticos em rápido desenvolvimento e ajudará a aumentar a confiança de seus clientes no compromisso de sua organização com sua segurança.
      </p>
      <Link
        to="https://www.pentagon-cyber.com/"
        target="_blank"
        className="btn bg-gradient-to-r border-none from-red-800 to-app-blue-200 hover:from-app-blue-200 hover:to-red-700 transition text-white"
      >
        <span>Visitar o website da Pentagon</span>
        <span><ArrowCircleRight size={24} /></span>
      </Link>
    </div>
  );
};
