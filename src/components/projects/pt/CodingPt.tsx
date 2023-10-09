import { CaretRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export const CodingPt = () => {
  return (
    <div>
      <h1 className="font-bold text-app-blue-200 text-xl border-b-2 border-app-blue-200 pb-2 w-fit pr-5">
        Novo centro de tecnologia e empreendedorismo juvenil
      </h1>
      <div>
        <p className="text-slate-800 text-base my-3">
          Oferecemos serviços de mentoria a jovens e adultos interessados ​​em adquirir e desenvolver competências nas áreas de codificação informática, universo 3D, noções básicas de cibersegurança e outras novas tecnologias e desenvolvimento de empreendedorismo empresarial. Também oferecemos nossa facilidade para quem está fazendo ou deseja fazer ensino a distância com plataformas online internacionais; nós os orientamos e orientamos durante todo o processo de aprendizagem.
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
              Desenvolvimento Mobile
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
              Desenvolvimento Web
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
              Noções básicas de segurança cibernética
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
              Outros materiais de desenvolvimento de competências em TIC.
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
