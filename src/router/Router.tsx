import { createBrowserRouter } from "react-router-dom";
import { Index } from "../pages/index/Index";
import { About } from "../pages/about/About";
import { Works } from "../pages/works/Works";
import { NotFound } from "../pages/NotFound/NotFound";
import Layout from "../components/layout/Layout";
import { WorkLayout } from "../components/layout/WorkLayout";

const Router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            children: [
                { index: true, element: <Index /> },
                { path: "About", element: <About /> },
                { path: "Works", element: <Works /> },
                { path: "/Works/:id", element: <WorkLayout /> },
            ]
        },
        {
            path: "*", element: <NotFound />,
        }
    ]
)

export default Router;
