import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import type { JSX } from "react/jsx-dev-runtime";

export default function ProtectedRoute({children}: {children: JSX.Element}) {
    const isLoggedIn = useSelector((state: any) => state.user.isLoggedIn);
    console.log("ProtectedRoute - isLoggedIn:", isLoggedIn);
    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }

    return children;
}