import { create } from "zustand"

interface BearCounterStoreTy {
  count: number
  inc: () => void
  dec: () => void
}

export const useBearStore = create<BearCounterStoreTy>((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
}))
