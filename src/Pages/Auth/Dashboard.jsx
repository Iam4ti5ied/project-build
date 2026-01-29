import React from "react";
import { useNavigate } from "react-router-dom";
import { Folder, FileText, MessageSquare, LogOut, User, Building2Icon } from "lucide-react";
import { SiMaterialformkdocs } from "react-icons/si";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-black p-6 md:p-10">
      
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">
            Dashboard
          </h1>
          <p className="text-gray-500 mt-1">
            Welcome to your architecture project workspace
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="mt-4 md:mt-0 flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-xl hover:bg-gray-800 transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        
        {/* Projects */}
        <div className="bg-amber-400 rounded-2xl shadow-sm p-6 hover:shadow-md transition cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-gray-100">
              <Folder className="text-black" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Projects</h3>
              <p className="text-sm text-black">
                View and manage ongoing projects
              </p>
            </div>
          </div>
        </div>


        {/* Messages */}
        <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-gray-100">
              <MessageSquare className="text-black" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Messages</h3>
              <p className="text-sm text-gray-500">
                Client and team communications
              </p>
            </div>
          </div>
        </div>



        {/* Documents */}
        <div className="bg-amber-400 rounded-2xl shadow-sm p-6 hover:shadow-md transition cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-gray-100">
              <FileText className="text-black" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Documents</h3>
              <p className="text-sm text-gray-500">
                Drawings, plans & files
              </p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="bg-amber-400 rounded-2xl shadow-sm p-6 hover:shadow-md transition cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-gray-100">
              <User className="text-black" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Globe</h3>
              <p className="text-sm text-gray-500">
                Global team
              </p>
            </div>
          </div>
        </div>

        
        <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-gray-100">
              <SiMaterialformkdocs className="text-black" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Materials</h3>
              <p className="text-sm text-gray-500">
                Material/Tools
              </p>
            </div>
          </div>
        </div>

         <div className="bg-amber-400 rounded-2xl shadow-sm p-6 hover:shadow-md transition cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-gray-100">
              <Building2Icon className="text-black" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Model</h3>
              <p className="text-sm text-gray-500">
                Models
              </p>
            </div>
          </div>
        </div>

           {/* Messages */}
        <div className="bg-amber-400 rounded-2xl shadow-sm p-6 hover:shadow-md transition cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-gray-100">
              <User className="text-black" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Globe</h3>
              <p className="text-sm text-gray-500">
                Global team
              </p>
            </div>
          </div>
        </div>

        
        <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-gray-100">
              <SiMaterialformkdocs className="text-black" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Materials</h3>
              <p className="text-sm text-gray-500">
                Material/Tools
              </p>
            </div>
          </div>
        </div>

         <div className="bg-amber-400 rounded-2xl shadow-sm p-6 hover:shadow-md transition cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-gray-100">
              <Building2Icon className="text-black" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Model</h3>
              <p className="text-sm text-gray-500">
                Models
              </p>
            </div>
          </div>
        </div>


        

      </div>
    </div>
  );
};

export default Dashboard;