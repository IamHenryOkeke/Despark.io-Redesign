import {ReactComponent as MenuOpenIcon} from "../assets/svg/menuIconOpen.svg";
import {ReactComponent as MenuCloseIcon} from "../assets/svg/menuIconClose.svg";
import { useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="mx-4 md:mx-8 lg:mx-32 font-body text-white">
        <div className="flex pt-10 justify-between items-center">
            <h1 className="font-bold text-2xl">
                <span className="text-white">de</span><span className="text-indigo-1000">spark</span>
            </h1>
            <div onClick={() => setNavbar(!navbar)} className='w-6 h-6 cursor-pointer lg:hidden md:w-8 md:h-8 '>
                {navbar ? <MenuCloseIcon className = "fill-white"/> : <MenuOpenIcon/>}
            </div>
            <ul className="hidden lg:flex lg:gap-10 w-full lg:w-auto text-[20px]">
                <li className="navbar-item">
                    <a href="">
                        How it works
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="">
                        About
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="">
                        Blog
                    </a>
                </li>
            </ul>
            <div className="hidden lg:flex items-center lg:gap-10 w-full lg:w-auto text-lg">
                <p>
                    <a href="">
                        Log in 
                    </a>
                </p>
                <button className="bg-indigo-1000 px-6 py-4 rounded">
                    Participate as a user
                </button>
            </div>
        </div>
        <div className={`${navbar ? "flex" : "hidden"} lg:hidden py-4 flex-col items-center gap-4 mt-3 rounded-xl`}>
            <ul className='flex flex-col items-center gap-5'>
                <li className="navbar-item">
                    <a href="">
                        How it works
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="">
                        About
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="">
                        Blog
                    </a>
                </li>
            </ul>
            <div className="flex flex-col items-center gap-5">
                <p>
                    <a href="">
                        Log in 
                    </a>
                </p>
                <button className="bg-indigo-1000 px-6 py-4 rounded">
                    Participate as a user
                </button>
            </div>
        </div>
    </nav>
    
  )
}

export default Navbar;

