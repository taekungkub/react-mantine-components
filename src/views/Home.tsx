import PageTitle from "../components/PageTitle"
import useAuth from "../context/AuthContext"

function Home() {
  const { user, isAuthenticated, loadingInitial } = useAuth()

  return (
    <>
      <PageTitle pageTitle={"Home"} />
      <div>
        <p>
          Hi {user?.email} isAuthenticated {isAuthenticated.toString()}
        </p>
      </div>
    </>
  )
}

export default Home
