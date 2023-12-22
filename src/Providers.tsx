import { Provider } from "react-redux"
import { Store } from "@reduxjs/toolkit"
import { AuthProvider } from "./context/AuthContext"
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
          {/* <WagmiConfigProvider>
            <WagmiProvider>
            </WagmiProvider>
          </WagmiConfigProvider> */}
          <AuthProvider>{children}</AuthProvider>
        </NoteProvider>
      </Provider>
    </>
  )
}

export default Providers
