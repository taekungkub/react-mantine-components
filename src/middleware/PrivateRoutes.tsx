import React, { useEffect } from "react"
import { Outlet, Navigate } from "react-router-dom"
import useAuth from "../context/AuthContext"
import { Group, Loader } from "@mantine/core"

export default function PrivateRoutes() {
  const { user, token, loading } = useAuth()

  // if (!token) {
  //   return <Navigate to="/signin" />
  // }

  return (
    <div>
      <Outlet />
    </div>
  )
}
