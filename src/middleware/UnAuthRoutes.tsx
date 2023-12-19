import { Outlet, Navigate } from "react-router-dom"
import useAuth from "../context/AuthContext"

export default function UnAuthRoutes() {
  const { user, token, loadingInitial, isAuthenticated } = useAuth()

  if (!loadingInitial && isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}
