import { logOut } from "../features/user/userSlice";
import { useDispatch } from "react-redux";

export default function useUserLogout() {
   const dispatch = useDispatch()

   const logout = () => {
      dispatch(logOut())
   }

   return { logout }
}