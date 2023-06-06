import { Provider } from "react-redux"
import { Store } from "@reduxjs/toolkit"
import { AuthProvider } from "./context/AuthContext"
import { WagmiProvider } from "./context/WagmiContext"
import { WagmiConfigProvider } from "./context/WagmiConfig"

interface Props {
  store: Store
  children: React.ReactNode
}
function Providers({ store, children }: Props) {
  return (
    <>
      <Provider store={store}>
        <WagmiConfigProvider>
          <WagmiProvider>
            <AuthProvider>{children}</AuthProvider>
          </WagmiProvider>
        </WagmiConfigProvider>
      </Provider>
    </>
  )
}

export default Providers
