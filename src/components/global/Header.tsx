import logo from "@/assets/media/svg/Logo.svg";
import breadCrumb from "@/assets/media/svg/bread_crumb.svg";
import { container } from "../../utils/constants";
const buttonSelection = "bg-cs-dark-700 border-cs-dark-400 border-2 rounded-[10px]"

const Header = () => {
  return (
    <div className={`${container} max-md:text-sm cs-2xl:text-lg font-medium flex justify-between items-center`}>
      <div className="left">
        <img className="w-[125px] md:w-[143px] cs-2xl:w-[180px] h-[35px]  md:h-[40px] cs-2xl:h-[50px]" src={logo} alt="FuturTech" />
      </div>
      <div className="hidden lg:flex justify-between gap-4 items-center">
        <div className={`py-3.5 px-6 cursor-pointer ${buttonSelection}`}>Home</div>
        <div className="py-3.5 px-6 cursor-pointer text-cs-light700">News</div>
        <div className="py-3.5 px-6 cursor-pointer text-cs-light700">Podcast</div>
        <div className="py-3.5 px-6 cursor-pointer text-cs-light700">Resources</div>
      </div>
      <div className="right">
        <div className="hidden lg:block button bg-cs-yellow-700 text-black px-5 py-3.5 rounded-[10px] cursor-pointer">Contact Us</div>
        <img className="lg:hidden cursor-pointer" src={breadCrumb} alt="menu" />
      </div>
    </div>
  );
};

export default Header;
