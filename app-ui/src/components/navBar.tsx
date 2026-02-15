import { FaUser } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../features/user/userSlice";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [userOptionVisible, setUserOptionVisible] = useState(false);
    const userName = useSelector((state: any) => state.user.name);
    const dispatch = useDispatch();
    const userLogOut = () => {
        dispatch(logOut());
    }
  return (
    <>
    <nav className="flex justify-between bg-[#10192c] p-6 shadow-lg px-12 border-b-2 border-slate-100 border-opacity-75">
        <GiHamburgerMenu color="white" size={30}/>
        <p className="text-2xl text-center text-white font-extralight">BeeHive</p>
        <ul className="flex space-x-4">
            <li className="flex text-white hover:text-blue-500" onClick={() => setUserOptionVisible(!userOptionVisible)}><FaUser size={20} /><p className="font-bold ml-2">{userName}</p></li>
            {userOptionVisible && (
              <div className="absolute top-16 right-8 bg-white border border-gray-300 rounded-md shadow-lg p-4">
                <ul>
                  <li onClick={userLogOut} className="flex justify-center items-center hover:bg-slate-200"><FaPowerOff className="m-2" size={15} color="red"/><a href="#" className="text-gray-800">Logout</a></li>
                </ul>
              </div>
            )}
        </ul>
    </nav>
    </>
  )
}

export default Navbar