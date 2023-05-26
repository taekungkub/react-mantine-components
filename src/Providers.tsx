import { Provider } from "react-redux"
import { Store } from "@reduxjs/toolkit"

interface Props {
  store: Store
  children: React.ReactNode
}
function Providers({ store, children }: Props) {
  return <Provider store={store}>{children}</Provider>
}

export default Providers
