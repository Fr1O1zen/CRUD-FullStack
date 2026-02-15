import httpApi from "./http.api"
import { useDispatch } from "react-redux"
import { setUser } from "../features/user/userSlice"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

interface LoginCredentials {
  email: string
  password: string
}

interface LoginResponse {
  token: string
  user: {
    id: string
    email: string
    username: string
  }
}


export default function useUserLogin(loginProps: LoginCredentials) {
   const dispatch = useDispatch()
   let navigate = useNavigate()
   const [loginError, setLoginError] = useState<string | null>(null)
   async function login() {
    try {
      const api = httpApi()
      const response = await api.post<LoginResponse>("login", loginProps)
      console.log("Login response:", response.data)
      dispatch(setUser({
        id: response.data.user.id,
        name: response.data.user.username,
        email: response.data.user.email,
      }))
      navigate("/")
      return true
    } catch (error) {
      console.error("Login failed:", error)
      setLoginError("Login failed. Please check your credentials and try again.")
      throw error
    }
    }
    return { login, loginError }
}