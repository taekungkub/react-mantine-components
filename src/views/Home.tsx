import { useAccount, useConnect } from "wagmi"
import PageTitle from "../components/PageTitle"
import useAuth from "../context/AuthContext"
import useWagmi from "../context/WagmiContext"

function Home() {
  const { user, loggedIn } = useAuth()
  const { account } = useWagmi()
  const { isConnected } = useAccount()
  return (
    <>
      <PageTitle pageTitle={"Home"} />
      <div>
        <p>
          Hi {user?.email} isLoggedIn {loggedIn.toString()}
        </p>
        <p>
          Hi {account.address} isConnect {isConnected.toString()}
        </p>
      </div>
    </>
  )
}

export default Home
