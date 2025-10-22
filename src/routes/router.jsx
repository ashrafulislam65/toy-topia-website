import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../layouts/Home";
import ErrorPage from "../components/ErrorPage";

const router =createBrowserRouter(
    [
        {
            path:"/",
            element:<HomeLayout></HomeLayout>,
            children:[
                {
                    path:"/",
                    element:<Home></Home>,
                }
            ]
        
        },
        {
            path:"/auth",
            element:<h1>Auth Layout</h1>,
        },
        {
            path:"/*",
            element:<ErrorPage></ErrorPage>,
        },
    ]

)
export default router;