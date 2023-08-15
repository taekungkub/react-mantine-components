import { create } from "zustand"

interface GlobalModalStore {
  opened: boolean
  open: () => void
  close: () => void
}

const useGlobalModal = create<GlobalModalStore>((set) => ({
  opened: false,
  open: () => set({ opened: true }),
  close: () => set({ opened: false }),
}))

export default useGlobalModal
