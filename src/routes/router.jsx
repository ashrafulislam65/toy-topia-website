import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../layouts/Home";
import ErrorPage from "../components/ErrorPage";
import DetailsPage from "../layouts/DetailsPage";
import Login from "../layouts/Login";
import Register from "../layouts/Register";
import AuthLayout from "../layouts/AuthLayout";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../components/Loading";
import MyProfile from "../layouts/MyProfile";
import ForgetPassword from "../layouts/ForgetPassword";
import OrderHistory from "../layouts/OrderHistory";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    path: "/",
                    element: <Home></Home>,
                },
                {
                    path: "/profile",
                    element: <MyProfile></MyProfile>,
                },
                {
                path: "/orders", 
                element: (
                    <PrivateRoute>
                        <OrderHistory></OrderHistory>
                    </PrivateRoute>
                ),
            },
                {
                    path: "/details/:id",
                    element: <PrivateRoute>
                        <DetailsPage></DetailsPage>
                    </PrivateRoute>,
                    loader: () => fetch('/all-toys.json'),
                    hydrateFallbackElement: <Loading></Loading>,
                }
            ]

        },

        {
            path: "/auth",
            element: <AuthLayout></AuthLayout>,
            children: [
                {
                    path: "/auth/login",
                    element: <Login></Login>,
                },
                {
                    path: "/auth/register",
                    element: <Register></Register>,
                },
                {
                    path: "/auth/forgot-password",
                    element: <ForgetPassword></ForgetPassword>,
                }

            ]
        },
        {
            path: "/*",
            element: <ErrorPage></ErrorPage>,
        },
    ]

)
export default router;