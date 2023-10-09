import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { HomePagePt } from './pages/pt/HomePagePt';
import { ServicesPage } from "./pages/ServicesPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { OurWebsites } from "./pages/OurWebsites";

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
]);