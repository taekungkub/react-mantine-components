import { Outlet, Navigate } from "react-router-dom"
import useAuth from "../context/AuthContext"

export default function UnAuthRoutes() {
  return <Outlet />
}
