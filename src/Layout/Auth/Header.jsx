//import logo from "../assets/logo.png"
const Header = () => {
  return (
    <div className="h-14 bg-white border-b flex items-center justify-between px-6">
      <h1 className="font-semibold">Dashboard</h1>

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm">
          K
        </div>
        <span className="text-sm">Kenny</span>
      </div>
    </div>
  );
};

export default Header;