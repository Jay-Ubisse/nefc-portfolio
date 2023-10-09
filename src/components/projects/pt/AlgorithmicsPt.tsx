import { CaretRight } from "@phosphor-icons/react";
import { useState } from "react";
import { Link } from "react-router-dom";

import ProjectImage from "../../../assets/img/ProjectImage.png";

const titles = [
  "Coding Knight (6 - 7 anos)",
  "Digital Literacy (6 - 9 anos)",
  "Visual Programming (8 - 10 anos)",
  "Building website (11 - 13 anos)",
  "Python Start (12 - 13 anos)",
  "Python Pro (14 - 17 anos)",
];

const contents = [
  "As crianças aprenderão a compreender os princípios básicos da programação, a criar jogos e desenhos animados no Scratch Junior, a abordar a criatividade na resolução de problemas, a falar sobre os seus projetos perante a confiança do grupo e a trabalhar em equipa em tarefas e projetos conjuntos.",
  "Esta é uma habilidade que toda criança moderna precisa. As crianças aprenderão a trabalhar com documentos de texto e a digitar rapidamente, a montar apresentações, a preparar apresentações orais, a apresentar informações em forma de tablets e infográficos, a pesquisar informações confiáveis ​​on-line e a projetar seus dados pessoais, a se cadastrar em sites e a usar e-mail e serviços de armazenamento em nuvem. Eles também aprenderão como trabalhar com um editor gráfico e criar imagens digitais.",
  "As crianças aprenderão sobre os conceitos e práticas básicas envolvidas na programação (desde a criação de algoritmos até a correção de erros). Eles aprenderão a criar desenhos animados e jogos na linguagem de programação baseada em blocos, tornando suas histórias mais sofisticadas à medida que seu conhecimento aumenta. Eles finalmente aprenderão como aplicar na prática os princípios básicos do design gráfico e dos gráficos vetoriais. Eles também aprenderão a trabalhar em equipe, a não ter medo de falar em público e a apresentar seus projetos com confiança diante de um público ao vivo.",
  "Este curso é muito interessante para crianças. Eles aprendem como desenvolver designs no Figma e criar sites no construtor baseado em blocos, Tilda. Eles aprenderão como escrever código HTML e CSS e publicar seu site usando as páginas do GitHub. Eles criarão designs para interfaces e adaptarão seus sites para dispositivos móveis.",
  "Este curso normalmente leva dois anos para completar todo o programa, tendo em conta que é um currículo de meio período. Este é o curso que ensina as crianças a começar a programar com seriedade e solidez. Os adolescentes aprenderão a compreender os fundamentos de algoritmos e orientação a objetos; desenvolver jogos gráficos interativos para PCs utilizando a biblioteca PyGame; trabalhe com gráficos e use a biblioteca Turtle. Eles também aprenderão como resolver tarefas reais usando Python e aplicar uma abordagem interativa.",
  "Este é o caminho-ponte para o profissionalismo. Este curso de dois anos permitirá que as crianças codifiquem em Python e testem suas habilidades nas áreas de TI mais procuradas, desde o desenvolvimento de jogos até a experiência em aprendizado de máquina. Durante o segundo ano, as crianças serão apresentadas ao mundo dos jogos 3D, projetando cenas e animando personagens. Eles também aprenderão como desenvolver aplicativos móveis e adquirirão outras habilidades interessantes.",
];

export const AlgorithmicsPt = () => {
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
          Facilitamos a aprendizagem de codificação/programação de computadores para crianças de 6 a 17 anos matriculadas na Algorithmics International School of Programming. Este programa está disponível em regime de tempo parcial e pode ser oferecido nas nossas instalações e/ou em qualquer escola normal de Maputo.
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
