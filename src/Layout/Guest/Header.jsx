import logo from "../../assets/logo.png"

const Header = () => {
    return (
         <header className="flex justify-between 
                items-center text-black py-4 px-6 
                md:px-18 bg-amber-500 drop-shadow-md ">
        
                  <a href="/">
                    <img src={logo} alt="" className="w-21 hover:scale-105 transition-all" />
                  </a>
        
                  <ul className="hidden xl:flex items-center gap-2 font-semibold text-base">
                    <li className="p-3 hover:bg-green-800 hover:text-white rounded-md transition-all cursor-pointer"><a href="/research-insight">Research & Insight</a></li>
                    <li className="p-3 hover:bg-green-800 hover:text-white rounded-md transition-all cursor-pointer"> <a href="/career">Career</a></li>
                    <li className="p-3 hover:bg-green-800 hover:text-white rounded-md transition-all cursor-pointer"> <a href="/people">People</a></li>
                    <li className="p-3 hover:bg-green-800 hover:text-white rounded-md transition-all cursor-pointer"> <a href="/project">Projects</a></li>
                    <li className="p-3 hover:bg-green-800 hover:text-white rounded-md transition-all cursor-pointer"> <a href="/about">About</a></li>
                    <li className="p-3 hover:bg-green-800 hover:text-white rounded-md transition-all cursor-pointer"> <a href="/contact">Contact</a></li>
                    <li className="p-3 hover:bg-green-800 hover:text-white rounded-md transition-all cursor-pointer"> <a href="/login">Login</a></li>
                  </ul>
        
                  <div className="relative hidden md:flex item-center justify-center gap-2">
                    <i className="bx bx-search py-4 absolute left-3 text-2xl text-white-500"></i>
                    <input 
                      type="text" 
                      placeholder="search.." 
                      className="py-3 pl-12 rounded-xl border-2 border-green-400 focus:bg-slate-100 focus:outline-green-500" 
                    />
                    <i className="bx bx-menu xl:hidden block text-5xl cursor-pointer"></i>
                  </div>
        
                </header>
    );
};



export default Header ;