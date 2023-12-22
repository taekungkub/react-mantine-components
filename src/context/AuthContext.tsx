import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserTy } from "../type"
import useToast from "../hooks/useToast"
import DummyServices from "../services/DummyServices"
import jwt_decode from "jwt-decode"

interface AuthContextType {
  // We defined the user type in `index.d.ts`, but it's
  // a simple object with email, name and password.
  token: string
  user?: UserTy
  loadingSubmit: boolean
  login: (email: string, password: string) => void
  signUp: (email: string, name: string, password: string) => void
  logout: () => void
  loadingInitial: boolean
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export function AuthProvider({ children }: { children: ReactNode }): JSX.Element {
  const [token, setToken] = useState("")
  const [user, setUser] = useState<UserTy>()
  const [loadingSubmit, setLoadingSubmit] = useState(false)
  const [loadingInitial, setLoadingInitial] = useState(true)
  const navigate = useNavigate()
  const toast = useToast()

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    handleToken()
  }, [])

  useEffect(() => {
    if (token) {
      getUserInfo()
    }
  }, [token])

  function handleToken() {
    try {
      let token = localStorage.getItem("token")

      if (token) {
        const { access_token, refresh_token } = JSON.parse(token)
        if (access_token) {
          setToken(access_token)
          setIsAuthenticated(true)
        }
      } else {
        setLoadingInitial(false)
      }
    } catch (error) {
      setLoadingInitial(false)
    }
  }

  async function getUserInfo() {
    try {
      await checkExpired()
      const res = await DummyServices.login()
      setUser({
        ...res.data,
        roles: ["admin", "superadmin"],
      })
    } catch (error) {
      console.log(error)
      setIsAuthenticated(false)
    } finally {
      setLoadingInitial(false)
    }
  }

  async function checkExpired() {
    try {
      if (!token) {
        return Promise.reject("no token")
      }
      var decodedToken = jwt_decode(token)
      const { exp } = decodedToken as any
      if (Date.now() > exp * 1000) {
        logout()
        return Promise.reject("token exp")
      }
      return Promise.resolve("done")
    } catch (error) {
      console.log(error)
      return Promise.reject(error)
    }
  }

  async function login(email: string, password: string) {
    try {
      setLoadingSubmit(true)
      const res = await DummyServices.login()
      setToken(res.data.token)
      const myToken = { access_token: res.data.token, refresh_token: "" }
      localStorage.setItem("token", JSON.stringify(myToken))
      setToken(res.data.token)
      setIsAuthenticated(true)
      toast.success("Login successfully !")
      navigate("/dashboard")
    } catch (error: any) {
      toast.error(error)
    } finally {
      setLoadingSubmit(false)
    }
  }

  function signUp(email: string, name: string, password: string) {
    setLoadingSubmit(true)
  }

  function logout() {
    localStorage.removeItem("token")
    setUser(undefined)
    setToken("")
    setIsAuthenticated(false)
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
      loadingSubmit,
      login,
      signUp,
      logout,
      loadingInitial,
      isAuthenticated,
    }),
    [token, user, loadingInitial, isAuthenticated]
  )

  // if (loadingInitial) {
  //   return (
  //     <Center h={"100vh"}>
  //       <Loader />
  //     </Center>
  //   )
  // }
  // We only want to render the underlying app after we
  // assert for the presence of a current user.
  return <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
}

// Let's only export the `useAuth` hook instead of the context.
// We only want to use the hook directly and never the context component.
export default function useAuth() {
  return useContext(AuthContext)
}
