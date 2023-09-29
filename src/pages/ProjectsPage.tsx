import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const ProjectsPage = () => {
    return ( 
        <div>
            <Header />
            <main className="bg-gradient-to-r from-app-blue-200 to-red-800 h-[calc(100vh-100px)] flex flex-row pt-3 pr-1 pb-1 pl-2 justify-between">
                <nav className="h-full w-[20%] bg-transparent text-white pt-10">
                    <h1 className="font-semibold text-xl text-center border-b-2 border-white pb-1 w-[70%] mx-auto mb-4">Active Projects</h1>
                    <ul>
                        <li>
                            <span>

                            </span>
                            <span>
                                Algorithmics
                            </span>
                        </li>
                        <li>
                            <span>

                            </span>
                            <span>
                                Coding, New Tech & Entrepreneurship Hub
                            </span>
                        </li>
                        <li>
                            <span>

                            </span>
                            <span>
                                Softwares Developed
                            </span>
                        </li>
                    </ul>
                </nav>
                <article className="h-full w-[80%] bg-white rounded-tl-3xl">

                </article>
            </main>
            <Footer />
        </div>
     );
}
 