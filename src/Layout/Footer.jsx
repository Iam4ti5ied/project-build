import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-neutral-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

      
        <div>
          <h3 className="text-xl font-semibold text-white">ArchBuild's</h3>
          <p className="mt-3 text-sm leading-6">
            Creating meaningful spaces that inspire, shape experiences, and support
            a more connected future.
          </p>
        </div>

        
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-700 cursor-pointer">Home</li>
            <li className="hover:text-green-700 cursor-pointer">Services</li>
            <li className="hover:text-green-700 cursor-pointer">Contact</li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-700 cursor-pointer">Blog</li>
            <li className="hover:text-green-700 cursor-pointer">Careers</li>
            <li className="hover:text-green-700 cursor-pointer">Support</li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Follow Us</h4>
          <div className="flex items-center gap-4 text-2xl">
            <FaFacebook className="hover:text-green-700 cursor-pointer" />
            <FaTwitter className="hover:text-green-700 cursor-pointer" />
            <FaLinkedin className="hover:text-green-700 cursor-pointer" />
            <FaInstagram className="hover:text-green-700 cursor-pointer" />
          </div>
        </div>
      </div>

      
      <div className="border-t border-neutral-700 mt-8 py-5 text-center text-sm text-neutral-400">
        © {new Date().getFullYear()} ArchBuild's. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;