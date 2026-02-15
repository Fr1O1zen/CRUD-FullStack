import { AiFillDashboard } from "react-icons/ai";
import { GiBeehive } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { useNavigate } from "react-router-dom"

export default function SideBar() {
    const navigate = useNavigate();
    return (
<div className="h-full flex flex-col justify-between w-1/6 bg-[#10192c] p-4 shadow-lg overflow-y-auto">
            <div>
                <h2 className="text-xl text-white text-center font-bold mb-4 border-b-2 border-gray-800">Menu</h2>
                <div className="text-center text-white opacity-35"><span className="sr-only">separator</span></div>
                <ul>
                    <li className="mb-2">
                        <a onClick={()=>navigate("/dashboard")} className="p-2 text-white text-xl flex items-center hover:bg-gray-300 hover:bg-opacity-20">
                            <AiFillDashboard className="mr-2" size={25} />
                            Dashboard
                        </a>
                    </li>
                    <li className="mb-2">
                        <a onClick={()=>navigate("/addHive")} className="p-2 text-white text-xl flex items-center hover:bg-gray-300 hover:bg-opacity-20">
                            <GiBeehive className="mr-2" size={25} />
                            Add Hive
                        </a>
                    </li>
                    <li className="mb-2">
                        <a onClick={()=>navigate("/settings")} className="p-2 text-white text-xl flex items-center hover:bg-gray-300 hover:bg-opacity-20">
                            <IoMdSettings className="mr-2" size={25} />
                            Settings
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <div className="flex justify-center mb-2 border-b-2 border-gray-800 pb-2">
                    <div className="bg-green-400 w-2 h-2 rounded-full m-1"></div>
                    <div className="bg-blue-400 w-2 h-2 rounded-full m-1"></div>
                    <div className="bg-pink-400 w-2 h-2 rounded-full m-1"></div>
                </div>
                <p className="text-center text-white opacity-35">Author: Sidorowicz Marcin</p>
            </div>
        </div>
    );
}
