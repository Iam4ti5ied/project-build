import { createBrowserRouter } from "react-router";
import AuthLayout from "../../Layout/Auth/Index";
import Dashboard from "../../Pages/Auth/Dashboard";


export const  authRoutes = [
  {
    path: "/",
    element: <AuthLayout/>, 
    children: [
        {
            index: true, 
            element: <Dashboard/>
        },

       


        
    ]
  },
];


export default router;