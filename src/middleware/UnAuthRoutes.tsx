import { Outlet, Navigate } from "react-router-dom"
import useAuth from "../context/AuthContext"

export default function UnAuthRoutes() {
  const { user, token, loading, loggedIn } = useAuth()

  if (!loading && loggedIn) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}
