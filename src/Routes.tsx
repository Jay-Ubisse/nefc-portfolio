import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { ServicesPage } from "./pages/ServicesPage";
import { ProjectsPage } from "./pages/ProjectsPage";

export const Routes = () => {
    return <RouterProvider router={router} />;
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/projects",
        element: <ServicesPage />,
    },
    {
        path: "/services",
        element: <ProjectsPage />,
    },
]);