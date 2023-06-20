import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import NewsDetails from "../components/NewsDetails/NewsDetails";
import Category from "../components/Category/Category";
import NewsDetailsCard from "../components/NewsDetailsCard/NewsDetailsCard";
import PrivateRoute from "./PrivateRoute";
import Terms from "../components/Terms/Terms";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Category />,
                loader: () => fetch('https://dragon-news-server-zrakib-dev.vercel.app/news')
                
            },
            {
                path: "/category/:id",
                element: <Category />,
                loader: ({params})=> fetch(`https://dragon-news-server-zrakib-dev.vercel.app/categories/${params.id}`)
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
        path: "terms",
        element: <Terms/>
    },
    {
        path: "/news-details",
        element: <NewsDetails />,
        children: [
            {
                path: ":id",
                element: <PrivateRoute><NewsDetailsCard/></PrivateRoute>,
                loader: ({ params }) => fetch(`https://dragon-news-server-zrakib-dev.vercel.app/news/${params.id}`)
           }
       ]
    },
    {
        path: "*",
        element: <ErrorPage/>
    },
])

export default router;