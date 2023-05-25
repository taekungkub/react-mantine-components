import { Outlet, Navigate } from "react-router-dom"
import useAuth from "../context/AuthContext"

export default function UnAuthRoutes() {
  const { token, loading } = useAuth()

  if (token) {
    return <Navigate to="/dashboard" />
  }
  return <Outlet />
}
