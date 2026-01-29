
import { Outlet } from "react-router-dom";
import Header from "./Guest/Header"
import Footer from "./Footer";



const Layout = () => {
    return (
      <div className="min-h-screen w-full grid grid-rows-[auto_1fr_auto]">
        <Header/>
        <main><Outlet/></main>
        <Footer/>
      </div>
    );
};


export default Layout; 