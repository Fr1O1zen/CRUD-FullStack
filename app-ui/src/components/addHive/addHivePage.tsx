import Navbar from "../navBar";
import Sidebar from "../sideBar";
import useHiveAddByName from "../../hooks/useHiveAddByName";
import { useState } from "react";

export default function addHivePage() {
  const [hiveName, setHiveName] = useState("");
  return (
      <div className="h-screen bg-[#343a48] flex flex-col">
      <Navbar />
      <div className="h-full flex">
        <Sidebar />
        <div>
          <h1 className="text-2xl font-bold text-white m-4">Add Hive</h1>
        </div>
        <div className="w-1/2">
          <form className="bg-[#2c3340] p-6 rounded-lg shadow-md w-full max-w-md mx-auto mt-16">
            <div className="mb-4">
              <label htmlFor="hiveName" className="block text-sm font-medium text-white mb-2">
                Hive Name
              </label>
              <input
                type="text"
                id="hiveName"
                value={hiveName}
                onChange={(e) => setHiveName(e.target.value)}
                className="w-full px-4 py-2 bg-[#1f2530] border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200"
                placeholder="Enter hive name"
              />
            </div>
            <div className="mb-4">
              <button type="button" onClick={async () => {
                await useHiveAddByName(hiveName);
                setHiveName("");
              }} className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-lg transition duration-200">
                Add Hive
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
