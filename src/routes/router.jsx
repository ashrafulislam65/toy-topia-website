import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

const router =createBrowserRouter(
    [
        {
            path:"/",
            element:<HomeLayout></HomeLayout>,
        
        },
        {
            path:"/auth",
            element:<h1>Auth Layout</h1>,
        },
        {
            path:"/*",
            element:<h1>404 Not Found</h1>,
        },
    ]

)
export default router;