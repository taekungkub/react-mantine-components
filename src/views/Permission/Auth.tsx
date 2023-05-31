import { useEffect } from "react"
import useAuth from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"

function AuthPage() {
  const { user } = useAuth()
  const navigate = useNavigate()

  return <div>Auth Page</div>
}

export default AuthPage
