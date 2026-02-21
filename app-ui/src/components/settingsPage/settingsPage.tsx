import Navbar from "../navBar";
import Sidebar from "../sideBar";

export default function settingsPage() {
  return (
    <div className="h-screen bg-[#343a48] flex flex-col">
      <Navbar />
      <div className="h-full flex">
        <Sidebar />
        <div>
          <h1 className="text-2xl font-bold text-white m-4">Settings</h1>
        </div>
      </div>
    </div>
  )
}
