import PageTitle from "../components/PageTitle"
import useAuth from "../context/AuthContext"

function Home() {
  const { user } = useAuth()
  return <div>Hi {user?.user_email}</div>
}

export default Home
