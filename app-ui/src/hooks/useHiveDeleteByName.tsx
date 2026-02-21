import httpApi from "./http.api"
import { toast } from 'react-toastify';
export default function useHiveDeleteByName() {
    const api = httpApi()
    const deleteHiveByName = async (name: string) => {
        try {
            const response = await api.delete(`/hives/${name}`)
            if (response.status === 200) {
                toast.success("Hive deleted successfully")
            } else {
                toast.error("Error deleting hive")
            }
        } catch (error) {
            toast.error("Error deleting hive")
        }
    }
    return { deleteHiveByName }
}