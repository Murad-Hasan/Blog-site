import './TopBar.css'
import { FaFacebookSquare, FaTwitterSquare, FaYoutubeSquare, FaInstagramSquare, FaSearch } from "react-icons/fa";
const TopBar = () => {
    return (
        <div className="w-full h-16 bg-gray-200 sticky top-0 flex items-center top">
           <div className="topLeft flex-auto flex items-center justify-center">
               <div className="icon flex">
               <FaFacebookSquare fontSize='30px' color='#4867AA'/>
               <FaTwitterSquare fontSize='30px' color='#5DA9DD'/>
               <FaYoutubeSquare fontSize='30px' color='red'/>
               <FaInstagramSquare fontSize='30px' color='#DD4D50'/>
               </div>
           </div>
           <div className="topCenter flex-auto">
               <ul className="topList flex items-center justify-center flex-wrap">
                   <li className="topListItems hover:text-red-300 cursor-pointer">Home</li>
                   <li className="topListItems ml-4 hover:text-red-300 cursor-pointer">About</li>
                   <li className="topListItems ml-4 hover:text-red-300 cursor-pointer">Contact</li>
                   <li className="topListItems ml-4 hover:text-red-300 cursor-pointer">Write</li>
                   <li className="topListItems ml-4 hover:text-red-300 cursor-pointer">LogOut</li>
               </ul>
           </div>
           <div className="topRight flex-auto flex items-center">
               <img className='topImg' src="https://i.ibb.co/m0hyM49/20190214112106-I5-edited.png" alt="profile" />
               <FaSearch className='ml-4 text-gray-500' fontSize='20px'/>
           </div>
        </div>
    );
};

export default TopBar;