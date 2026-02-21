import Navbar from "./navBar";
import Sidebar from "./sideBar";
import httpApi from "../hooks/http.api";

export const MainPage = () => {
  let api = httpApi()
  return (
    <div className="h-screen bg-[#343a48] flex flex-col">
      <Navbar />
      <div className="h-full flex">
        <Sidebar />
        <div>
          <h1 className="text-2xl font-bold text-white m-4">Dashboard</h1>
          <button onClick={()=>{api.get("/test", {withCredentials:true})}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
            test
          </button>
        </div>
      </div>
    </div>
  );
};
