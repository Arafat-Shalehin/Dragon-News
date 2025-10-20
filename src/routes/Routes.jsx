import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";

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
        path: '/news-details/:id',
        element: (
            <PrivateRoute>
                <NewsDetails></NewsDetails>
            </PrivateRoute>
        ),
        loader: () => fetch('/news.json'),
    },
    {
        path: '/*',
        element: <h1>Error404</h1>,
    },
]);

export default router;