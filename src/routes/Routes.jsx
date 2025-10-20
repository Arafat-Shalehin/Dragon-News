import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayouts/>,
        children: [
            {
                path: '',
                element: <Home/>
            },
            {
                path: '/category/:id',
                element: <CategoryNews/>,
                loader: () => fetch("/news.json"),
            },
        ],
    },
    {
        path: '/auth',
        element: <AuthLayout/>,
        children: [
            {
                path: '/auth/login',
                element: <Login/>
            },
            {
                path: '/auth/register',
                element: <Register/>
            }
        ]
    },
    {
        path: '/news',
        element: <h1>News Layout</h1>,
    },
    {
        path: '/*',
        element: <h1>Error404</h1>,
    },
]);

export default router;