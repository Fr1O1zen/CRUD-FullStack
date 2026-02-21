import { useEffect, useState } from "react"
import httpApi from "../../hooks/http.api"
import useHiveDeleteByName from "../../hooks/useHiveDeleteByName"
interface Hive {
    name: string
}

export default function HiveTable() {
    const api = httpApi()
    const { deleteHiveByName } = useHiveDeleteByName()
    const fetchHives = async () => {
    try {
        const res = await api.get("/hives")
        setHives(res.data.hives.hives)
    } catch (error) {
        console.error(error)
    }
    }
    let [hives, setHives] = useState<Array<Hive>>([])
    useEffect(() => {
        fetchHives()
    }, [])
  return (
    <div className="flex justify-center">
        <table className=" bg-slate-600 text-white">
            <thead>
                <tr>
                    <th className="py-2 px-4 border-b border-gray-700">Hive ID</th>
                    <th className="py-2 px-4 border-b border-gray-700">Name</th>
                    <th className="py-2 px-4 border-b border-gray-700">Delete</th>
                </tr>
            </thead>
            <tbody>
                {hives && hives.map((hive: Hive, index: number) => (
                    <tr key={index}>
                        <td className="py-2 px-4 border-b border-gray-700 ">{index+1}</td>
                        <td className="py-2 px-4 border-b border-gray-700">{hive.name}</td>
                        <td className="py-2 px-4 border-b border-gray-700">
                            <button onClick={async () =>{
                                await deleteHiveByName(hive.name)
                                await fetchHives()
                            }}
                             className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-lg transition duration-200">
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                {!hives.length && (
                    <tr>
                        <td colSpan={2} className="py-2 px-4 border-b border-gray-700 text-center">No hives found</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}
