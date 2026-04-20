import { FaXTwitter } from "react-icons/fa6"; 
import { IoLogoInstagram } from "react-icons/io5";
  import { IoLogoGithub } from "react-icons/io5";
export default function Footer() {
    return (
        <footer className=" text-gray-400 text-center py-4 mt-8">
            <div>
      <div className="flex justify-center gap-6 mb-4">
                    <FaXTwitter />
                    <IoLogoInstagram className="text-white bg-red-500"/>
                    <IoLogoGithub />
     </div>
      <p className="text-sm">&copy; {new Date().getFullYear()} PhiloQuotes. All rights reserved.</p>
            </div>
    </footer>
  );
}