import React, { useEffect } from "react"
import { Outlet, Navigate } from "react-router-dom"
import useAuth from "../context/AuthContext"
import { Group, Loader } from "@mantine/core"

export default function PrivateRoutes() {
  const { user, token, loading } = useAuth()

  useEffect(() => {
    console.log(user)
  }, [user])

  if (!user) {
    return <h1>Loading ...</h1>
  }

  // if (!token) {
  //   return <Navigate to="/signin" />
  // }
  return (
    <div>
      {loading ? (
        <Group position="center" h={100}>
          <Loader />
        </Group>
      ) : (
        <Outlet />
      )}
    </div>
  )
}
