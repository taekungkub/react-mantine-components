import React, { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { UserTy } from "../type"
import AuthServices from "../services/AuthServices"
import useToast from "../hooks/useToast"

interface AuthContextType {
  // We defined the user type in `index.d.ts`, but it's
  // a simple object with email, name and password.
  token: string
  user?: UserTy
  loading: boolean
  error?: any
  login: (email: string, password: string) => void
  signUp: (email: string, name: string, password: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export function AuthProvider({ children }: { children: ReactNode }): JSX.Element {
  const [token, setToken] = useState("")
  const [user, setUser] = useState<UserTy>()
  const [error, setError] = useState<any>()
  const [loading, setLoading] = useState<boolean>(false)
  const [loadingInitial, setLoadingInitial] = useState<boolean>(false)
  const navigate = useNavigate()
  const location = useLocation()
  const toast = useToast()

  useEffect(() => {
    if (error) setError(undefined)
  }, [location.pathname])

  useEffect(() => {
    getUserInfo()
  }, [token])

  async function getUserInfo() {
    try {
      setLoading(true)
      const res = await AuthServices.profile()
      setUser(res.data.data)
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }

  async function login(email: string, password: string) {
    try {
      setLoading(true)
      const res = await AuthServices.login(email, password)
      setToken(res.data.data.access_token)
      localStorage.setItem("token", res.data.data.access_token)
      navigate("/dashboard")
      toast.success()
    } catch (error: any) {
      toast.error(error, "")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    console.log(user)
  }, [user])

  function signUp(email: string, name: string, password: string) {
    setLoading(true)
  }

  function logout() {
    localStorage.removeItem("token")
    setUser(undefined)
    setToken("")
  }

  // Make the provider update only when it should.
  // We only want to force re-renders if the user,
  // loading or error states change.
  //
  // Whenever the `value` passed into a provider changes,
  // the whole tree under the provider re-renders, and
  // that can be very costly! Even in this case, where
  // you only get re-renders when logging in and out
  // we want to keep things very performant.
  const memoedValue = useMemo(
    () => ({
      token,
      user,
      loading,
      error,
      login,
      signUp,
      logout,
    }),
    [token, user, loading, error]
  )

  // We only want to render the underlying app after we
  // assert for the presence of a current user.
  return <AuthContext.Provider value={memoedValue}>{!loadingInitial && children}</AuthContext.Provider>
}

// Let's only export the `useAuth` hook instead of the context.
// We only want to use the hook directly and never the context component.
export default function useAuth() {
  return useContext(AuthContext)
}
