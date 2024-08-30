import { FaUserPlus,FaCartPlus,FaHeart  } from "react-icons/fa";
const Header = () => {
    return (
        <header>
                <nav className="flex justify-between items-center h-16 px-4 shadow-lg">
            <img className="h-10" src="https://res.cloudinary.com/dvp64j4a3/image/upload/c_crop,w_180,h_70/v1724998491/logo_vgddsp.jpg" alt="" />
            <div className="flex list-none gap-x-7 font-bold text-xl ">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">Shop</a></li> 
                <li><a href="#">Contact</a></li> 
            </div>

            <div className="flex items-center gap-x-4">
                <div className="tooltip bg-gray-100 border border-black border-opacity-20 w-10 h-10 rounded-full p-3 flex  items-center justify-center" data-tip="User">
                    <FaUserPlus></FaUserPlus>
                 </div>
                <div className="tooltip bg-gray-100 border border-black border-opacity-20 w-10 h-10 rounded-full p-3 flex  items-center justify-center" data-tip="User">
                    <FaCartPlus></FaCartPlus>
                    </div>
                <div className="tooltip bg-gray-100 border border-black border-opacity-20 w-10 h-10 rounded-full p-3 flex  items-center justify-center" data-tip="User">
                    <FaHeart ></FaHeart>
                 </div>
                
            </div>
        </nav>
    </header>
  );
};

export default Header;