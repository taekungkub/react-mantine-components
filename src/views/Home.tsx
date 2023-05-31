import PageTitle from "../components/PageTitle"
import useAuth from "../context/AuthContext"

function Home() {
  const { user } = useAuth()
  return <div>Hi {user?.email}</div>
}

export default Home
