import httpApi from "./http.api";
import { useSelector, useDispatch } from "react-redux";
import { setUserApiary } from "../features/userApiary/userApiarySlice";

interface HivesResponse {
  hives: Array<{ name: string }>;
}

export default function useGetUserHives() {
    const userId = useSelector((state: any) => state.user?.id);
    const dispatch = useDispatch();
    async function getUserHives(){
      try {
        const api = httpApi();
        const response = await api.get<HivesResponse>("/hives", {
          headers: {
            "Content-Type": "application/json",
          },
          params: {
            userid: userId || "",
          },
        });
        dispatch(setUserApiary(response.data));
        return response.data;
      } catch (error) {
        console.error("GetUserHives failed:", error);
        throw error;
      }
    }
    return { getUserHives };
}