import { useState } from "react"
import httpApi from "./http.api"
interface UserRegisterProps {
  email: string;
  nickname: string;
  password: string;
}

interface UserRegisterResponse {
  isRegistered: boolean;
  message: string;
}
export default function userRegister(props: UserRegisterProps ) {
  const [registerError, setRegisterError] = useState<string | null>(null)
  async function register(): Promise<UserRegisterResponse> {
    try {
      const api = httpApi()
      const response = await api.post<UserRegisterResponse>("register", props)
      if (response.data.isRegistered) {
        return { isRegistered: true, message: response.data.message }
      }
      setRegisterError(response.data.message)
      return { isRegistered: false, message: response.data.message }
    } 
    catch (error) {
      console.error("Registration failed:", error)
      setRegisterError("Registration failed. Please try again.")
      return { isRegistered: false, message: "Registration failed. Please try again." }
    }
  }

  return { register, registerError }
}
