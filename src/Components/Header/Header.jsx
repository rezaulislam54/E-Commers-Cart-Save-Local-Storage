import { FaUserPlus,FaCartPlus ,FaHeart  } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Header = () => {

    const [open, setopen]=useState(false);

    return (
        <header>
            <nav className="flex justify-between items-center h-16 px-4 shadow-lg bg-[#008080] text-white">      
                <div onClick={()=> setopen(!open)} className={`text-2xl  md:hidden ${open? 'true' : 'folse'}`}>
                    {
                        open===true? <RxCross2></RxCross2>  :<AiOutlineMenu></AiOutlineMenu>
                    }
                </div>
                <img className="h-10 hidden md:flex" src="https://res.cloudinary.com/dvp64j4a3/image/upload/c_crop,w_180,h_70/v1724998491/logo_vgddsp.jpg" alt="" />

                <ul className={` absolute bg-[#008080] pl  md:static md:flex list-none md:gap-x-4 p-5 duration-1000 lg:gap-x-7 font-bold text-xl 
                     ${open?'top-16': '-top-52'}`}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Shop</a></li> 
                    <li><a href="#">Contact</a></li> 
                </ul>

                <div className="flex items-center gap-x-4 text-black">

                    <div className="tooltip text-2xl bg-gray-100 border border-black border-opacity-20 w-10 h-10 rounded-full  flex p-1  items-center justify-center" data-tip="User">
                        <a href="#"><FaCartPlus></FaCartPlus></a>
                        </div>
                    <div className="tooltip hidden text-2xl bg-gray-100 border border-black border-opacity-20 w-10 h-10 rounded-full p-1 md:flex  items-center justify-center" data-tip="User">
                        <a href="#"><FaHeart ></FaHeart></a>
                    </div>

                    <div className="tooltip bg-gray-100 border text-2xl border-black border-opacity-20 w-10 h-10 rounded-full p-1 flex  items-center justify-center" data-tip="User">
                        <a href="#"><FaUserPlus></FaUserPlus></a>
                    </div>
                    
                </div>
        </nav>
    </header>
  );
};

export default Header;