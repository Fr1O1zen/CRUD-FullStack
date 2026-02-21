import Navbar from "../navBar";
import Sidebar from "../sideBar";
import HiveTable from "./hiveTable";
export default function dashboardPage() {
  return (
    <div className="h-screen bg-[#343a48] flex flex-col">
      <Navbar />
      <div className="h-full flex">
        <Sidebar />
        <div>
          <h1 className="text-2xl font-bold text-white m-4">Dashboard</h1>
        </div>
        <div className=" w-1/2 rounded-lg m-16">
        <h3 className="text-xl font-semibold text-white text-center">Hive Overview</h3>
          <HiveTable />
        </div>
      </div>
    </div>
  )
}
