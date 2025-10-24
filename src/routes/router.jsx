import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../layouts/Home";
import ErrorPage from "../components/ErrorPage";
import DetailsPage from "../layouts/DetailsPage";
import Login from "../layouts/Login";
import Register from "../layouts/Register";
import AuthLayout from "../layouts/AuthLayout";
import PrivateRoute from "../provider/PrivateRoute";

const router =createBrowserRouter(
    [
        {
            path:"/",
            element:<HomeLayout></HomeLayout>,
            children:[
                {
                    path:"/",
                    element:<Home></Home>,
                },
                {
                    path:"/profile",
                    element:<h1>Profile Page</h1>,
                },
                {
                    path:"/details/:id",
                    element:<PrivateRoute>
                        <DetailsPage></DetailsPage>
                    </PrivateRoute>,
                    loader:()=>fetch('/all-toys.json')
                }
            ]
        
        },
        {
            path:"/auth",
            element:<AuthLayout></AuthLayout>,
            children:[
                {
                    path:"/auth/login",
                    element:<Login></Login>,
                },
                {
                    path:"/auth/register",
                    element:<Register></Register>,
                },
                
            ]
        },
        {
            path:"/*",
            element:<ErrorPage></ErrorPage>,
        },
    ]

)
export default router;