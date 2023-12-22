import { Outlet, Navigate, useNavigate } from "react-router-dom"
import useAuth from "../context/AuthContext"
import LoadingScreen from "../components/LoadingScreen"

interface Props {
  allowedRoles?: string[]
}

export default function PrivateRoutes({ allowedRoles }: Props) {
  const { user, token, loadingInitial, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  if (loadingInitial && !user) {
    return <LoadingScreen />
  }

  if (!loadingInitial && !isAuthenticated) {
    return <Navigate to="/signin" replace />
  }

  if (allowedRoles && user && isAuthenticated) {
    return user?.roles.find((role) => allowedRoles.includes(role)) ? <Outlet /> : <Navigate to={"/exeception/403"} replace />
  }

  return <Outlet />
}
