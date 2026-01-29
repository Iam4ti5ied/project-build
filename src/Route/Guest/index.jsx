import { createBrowserRouter } from "react-router";
import Layout from "../../Layout/Index";
import Homepage from "../../Pages/Guest/Homepage";
import ResearchInsight from "../../Pages/Guest/Research-Insight";
import Career from "../../Pages/Guest/Career";
import People from "../../Pages/Guest/People";
import Projects from "../../Pages/Guest/Projects";
import About from "../../Pages/Guest/About";
import Contact from "../../Pages/Guest/Contact";
import Login from "../../Pages/Guest/Login";
import Signup  from "../../Pages/Guest/Signup";
import Dashboard from "../../Pages/Auth/Dashboard";
import ProtectedRoute from "../PrivateRoute/ProtectedRoute";
import AuthLayout from "../../Layout/Auth/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>, 
    children: [
        {
            index: true, 
            element: <Homepage/>
        },

        {
            path: "/research-insight",
            element: <ResearchInsight/>
        },

        {
           path: "/career",
           element: <Career/>
        },

        {
            path: "/people",
            element: <People/>,
        },
        
        {
            path: "/project",
            element: <Projects/>
        },


        {
            path: "/about",
            element: <About/>
        },

        {
            path: "/contact",
            element: <Contact/>
        },

        {
            path: "/login",
            element: <Login/>
        },

        {
            path: "/signup",
            element: <Signup/>
        },

        {
            path: "/protectedroute",
            element: <ProtectedRoute/>
        }


        
    ]
  },
  {
    path: "/dashboard",
    element: <AuthLayout/>,
    children: [{
    index : true,
    element: <Dashboard/>

    }]
  }
]);


export default router;