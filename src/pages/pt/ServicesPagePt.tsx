import { Disclosure } from "@headlessui/react";
import { CaretDown } from "@phosphor-icons/react";
import { FooterPt } from "../../components/pt/FooterPt";
import { HeaderPt } from "../../components/pt/HeaderPt";

export const ServicesPagePt = () => {
    return (
        <div className="bg-gradient-to-r from-red-800 to-app-blue-200 ">
            <HeaderPt />
            <main className="laptop:p-10 mobile:p-3">
                <h1 className="font-bold text-white text-3xl border-b-2 border-white pb-2 w-fit pr-5 mb-5">
                    Nossos serviços
                </h1>
                <div className="flex flex-col gap-2 text-white">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button
                                    className={`${open
                                        ? "from-app-blue-200 to-red-800"
                                        : "from-red-700 to-app-blue-200"
                                        } bg-gradient-to-r hover:from-app-blue-200 hover:to-red-800 shadow-slate-500 shadow-md rounded-lg hover:shadow-slate-700 flex justify-between py-5 px-5 items-center text-white font-medium text-lg`}
                                >
                                    <span>Tutoria e criação de aprendizagem online</span>
                                    <CaretDown
                                        weight="bold"
                                        className={`${open ? "rotate-180 transform" : ""
                                            } h-5 w-5 text-appgreen-300`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 py-2 text-white bg-transparent border-2 rounded-md border-app-blue-100 -mt-1">
                                    <p>
                                        Na NEFC Projects Limitada, oferecemos aprendizagem abrangente
                                        e criação de serviços de mentoria, equipando indivíduos e
                                        organizações com o conhecimento e as soluções necessárias para
                                        prosperar na era digital. Nossos jovens e altamente qualificados
                                        mentores fornecem orientação de aprendizagem personalizada, ajudando
                                        alunos de todos os níveis para dominar habilidades essenciais de informática,
                                        linguagens de programação e aplicativos de software e outros
                                        tecnologias modernas. Nós os ajudamos a navegar com confiança
                                        no cenário digital e alavancar o conhecimento da tecnologia
                                        para alcançar seus objetivos.
                                    </p>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className={`${open
                                    ? "from-app-blue-200 to-red-800"
                                    : "from-red-700 to-app-blue-200"
                                    } bg-gradient-to-r hover:from-app-blue-200 hover:to-red-800 shadow-slate-500 shadow-md rounded-lg hover:shadow-slate-700 flex justify-between py-5 px-5 items-center text-white font-medium text-lg`}>
                                    <span>Representação de Parceiros Internacionais</span>
                                    <CaretDown
                                        weight="bold"
                                        className={`${open ? "rotate-180 transform" : ""
                                            } h-5 w-5 text-appgreen-300`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 py-2 text-white bg-transparent border-2 rounded-md border-app-blue-100 -mt-1">
                                    <p>
                                        Também canalizamos os interesses dos nossos parceiros internacionais em
                                        Moçambique e nos restantes países da SADC. <br />
                                        Estabelecer conexões e construir uma
                                        presença sólida pode ser assustador, mas é aí que entramos
                                        para guiar as empresas para o sucesso. Nossos consultores experientes
                                        compreendem as práticas comerciais locais, regulamentos, cultura
                                        nuances e também estão bem conectados dentro da região da SADC.
                                        Ajudamos os nossos parceiros a estabelecer uma presença forte,
                                        conectando você com as partes interessadas, facilitando negociações,
                                        e fornecendo orientação valiosa.
                                    </p>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className={`${open
                                    ? "from-app-blue-200 to-red-800"
                                    : "from-red-700 to-app-blue-200"
                                    } bg-gradient-to-r hover:from-app-blue-200 hover:to-red-800 shadow-slate-500 shadow-md rounded-lg hover:shadow-slate-700 flex justify-between py-5 px-5 items-center text-white font-medium text-lg`}>
                                    <span>Serviço de consultoria geral</span>
                                    <CaretDown
                                        weight="bold"
                                        className={`${open ? "rotate-180 transform" : ""
                                            } h-5 w-5 text-appgreen-300`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 py-2 text-white bg-transparent border-2 rounded-md border-app-blue-100 -mt-1">
                                    <p>
                                        Como parceiro confiável, trazemos experiência e insights para
                                        ajudá-lo a superar desafios e tomar decisões informadas.
                                        Através da nossa abordagem colaborativa e insights do sector,
                                        fornecer soluções exclusivas para planeamento estratégico, processos
                                        de optimização, pesquisa de mercado e muito mais. Quer você seja uma
                                        startup, pequena empresa ou empresa estabelecida, nossos
                                        serviços de consultoria geral são projetados para desbloquear seu
                                        potencial. Nós nos esforçamos para ajudá-lo a alcançar um crescimento sustentável, eficiência operacional e diferencial competitivo no mercado
                                    </p>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className={`${open
                                    ? "from-app-blue-200 to-red-800"
                                    : "from-red-700 to-app-blue-200"
                                    } bg-gradient-to-r hover:from-app-blue-200 hover:to-red-800 shadow-slate-500 shadow-md rounded-lg hover:shadow-slate-700 flex justify-between py-5 px-5 items-center text-white font-medium text-lg`}>
                                    <span>Desenvolvimento e gerenciamento de projetos</span>
                                    <CaretDown
                                        weight="bold"
                                        className={`${open ? "rotate-180 transform" : ""
                                            } h-5 w-5 text-appgreen-300`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 py-2 text-white bg-transparent border-2 rounded-md border-app-blue-100 -mt-1">
                                    <p>
                                        Entendemos que embarcar em projectos pode ser uma jornada complexa, mas com a equipe certa o sucesso no planeamento e execução é garantido. Com nossa experiência e equipe dedicada, orientamos perfeitamente seus projectos desde o início até a conclusão. Nossas soluções personalizadas abrangem planeamento meticuloso, optimização de recursos, mitigação de riscos e monitoramento de desempenho.
                                    </p>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className={`${open
                                    ? "from-app-blue-200 to-red-800"
                                    : "from-red-700 to-app-blue-200"
                                    } bg-gradient-to-r hover:from-app-blue-200 hover:to-red-800 shadow-slate-500 shadow-md rounded-lg hover:shadow-slate-700 flex justify-between py-5 px-5 items-center text-white font-medium text-lg`}>
                                    <span>Facilitação de negócios internacionais</span>
                                    <CaretDown
                                        weight="bold"
                                        className={`${open ? "rotate-180 transform" : ""
                                            } h-5 w-5 text-appgreen-300`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 py-2 text-white bg-transparent border-2 rounded-md border-app-blue-100 -mt-1">
                                    <p>
                                        Desbloquear o potencial dos mercados locais, regionais e internacionais pode ser um processo muito complicado que envolve tempo e esforço. Na NEFC Projects Limitada, entendemos as complexidades e os obstáculos que as empresas enfrentam quando se expandem globalmente. É por isso que estamos aqui para ajudá-lo em todo o processo.
                                    </p>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
            </main>
            <FooterPt />
        </div>
    );
};
