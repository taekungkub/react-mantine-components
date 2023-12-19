import React, { useEffect, useState } from "react"
import { Outlet, Navigate, useNavigate } from "react-router-dom"
import useAuth from "../context/AuthContext"
import { Group, Loader } from "@mantine/core"
import LoadingScreen from "../components/LoadingScreen"

interface Props {
  allowedRoles?: string[]
}

export default function PrivateRoutes({ allowedRoles }: Props) {
  const { user, token, loadingInitial, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  // const [Loading, setLoading] = useState(true)
  // const [loggedIn, setLoggedIn] = useState(false)

  // function getUser() {
  //   setLoading(true)

  //   setTimeout(() => {
  //     setLoggedIn(false)
  //     setLoading(false)
  //   }, 2000)
  // }

  // useEffect(() => {
  //   getUser()
  // }, [])

  // useEffect(() => {
  //   checkExpired()
  // }, [])

  // useEffect(() => {
  //   if (!loading) {
  //     if (!token) {
  //       navigate("/signin")
  //     }
  //   }
  // }, [token])

  if (loadingInitial && !isAuthenticated) {
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
