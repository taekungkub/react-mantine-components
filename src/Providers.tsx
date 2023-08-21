import { Provider } from "react-redux"
import { Store } from "@reduxjs/toolkit"
import { AuthProvider } from "./context/AuthContext"
import { WagmiProvider } from "./context/WagmiContext"
import { WagmiConfigProvider } from "./context/WagmiConfig"
import { NoteProvider } from "./context/NoteContext"

interface Props {
  store: Store
  children: React.ReactNode
}
function Providers({ store, children }: Props) {
  return (
    <>
      <Provider store={store}>
        <NoteProvider>
          <WagmiConfigProvider>
            <WagmiProvider>
              <AuthProvider>{children}</AuthProvider>
            </WagmiProvider>
          </WagmiConfigProvider>
        </NoteProvider>
      </Provider>
    </>
  )
}

export default Providers
