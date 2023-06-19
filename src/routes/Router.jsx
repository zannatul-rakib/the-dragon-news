import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import NewsDetails from "../components/NewsDetails/NewsDetails";
import Category from "../components/Category/Category";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Category />,
                loader: () => fetch('http://localhost:5000/news')
                
            },
            {
                path: "/category/:id",
                element: <Category />,
                loader: ({params})=> fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/news-details/:id",
        element: <NewsDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
    },
    {
        path: "*",
        element: <ErrorPage/>
    },
])

export default router;