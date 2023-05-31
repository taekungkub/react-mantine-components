import { useEffect } from "react"
import useAuth from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"

function AdminPage() {
  const { user } = useAuth()
  const navigate = useNavigate()

  return <div>Admin Page</div>
}

export default AdminPage
