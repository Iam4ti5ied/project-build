
import { Outlet } from "react-router-dom";
import Header from "../Auth/Header";
import Sidebar from "../Auth/Sidebar"





const AuthLayout = () => {
    return (
      <div className="min-h-screen w-full grid grid-cols-[auto_1fr]">
        <Sidebar/> <div>
        <Header/>
        <main><Outlet/></main>
      </div>
      </div>


    );
};


export default AuthLayout; 