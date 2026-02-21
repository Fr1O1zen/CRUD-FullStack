import httpApi from "./http.api";
import {toast} from "react-toastify";
export default async function useHiveAddByName(hiveName: string) {
    const api = httpApi();
    try {
        const response = await api.post("/hives", { name: hiveName });
        if(response.status !== 201) {
            toast.error("Failed to add hive. Please try again.");
        }
        toast.success("Hive added successfully!");
        return response.data;
    } catch (error) {
        toast.error("An error occurred while adding the hive. Please try again.");
        console.log("Error adding hive:", error);
    }
}