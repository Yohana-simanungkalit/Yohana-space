import { createBrowserRouter } from "react-router-dom"
import { ROUTES } from "../constants/routes"
import { lazy } from "react";
import ProtectedLayout from "../components/ProtectedLayout";
import NotFound from "../pages/NotFound";

const Index = lazy(() => import("../pages/Index"));
const Form = lazy(() => import("../components/modules/Form"));
const Dashboard = lazy(() => import("../components/modules/Dashboard"));

export const AppRouter = createBrowserRouter([
    {
        path: ROUTES.HOME,
        lazy: async () => ({
            Component: (await import("../pages/Index")).default,
        })
    },
    {
        path: ROUTES.FORM,
        lazy: async () => ({
            Component: (await import("../components/modules/Form")).default,
        })
    },
    {
        element: <ProtectedLayout />,
        children: [
            {
                path: ROUTES.DASHBOARD,
                lazy: async () => ({
                    Component: (await import("../components/modules/Dashboard")).default,
                }),
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

