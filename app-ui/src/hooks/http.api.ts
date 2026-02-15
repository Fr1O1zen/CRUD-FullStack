import axios from "axios";

export default function httpApi() {
    const api = axios.create({
        baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/",
        headers: {
            "Content-Type": "application/json",
        },
        withCredentials: true,
    }); 
    console.log("API URL:", api.defaults.baseURL);
    return api;
}