import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { HomePagePt } from './pages/pt/HomePagePt';
import { ServicesPage } from "./pages/ServicesPage";
import { ServicesPagePt } from "./pages/pt/ServicesPagePt";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ProjectsPagePt } from "./pages/pt/ProjectsPagePt";
import { OurWebsites } from "./pages/OurWebsites";
import { OurWebsitesPt } from "./pages/pt/OurWebsitesPt";

export const Routes = () => {
    return <RouterProvider router={router} />;
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/services",
        element: <ServicesPage />,
    },
    {
        path: "/projects",
        element: <ProjectsPage />,
    },
    {
        path: "/websites",
        element: <OurWebsites />,
    },
    {
        path: "/pt",
        element: <HomePagePt />,
    },
    {
        path: "/pt/services",
        element: <ServicesPagePt />,
    },
    {
        path: "/pt/projects",
        element: <ProjectsPagePt />,
    },
    {
        path: "/pt/websites",
        element: <OurWebsitesPt />,
    },
]);