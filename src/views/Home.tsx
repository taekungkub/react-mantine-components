import PageTitle from "../components/PageTitle"
import useAuth from "../context/AuthContext"

function Home() {
  const { user, loggedIn } = useAuth()
  return (
    <div>
      Hi {user?.email} isLoggedIn {loggedIn.toString()}
    </div>
  )
}

export default Home
