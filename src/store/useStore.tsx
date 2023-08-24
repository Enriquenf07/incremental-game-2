import { create } from 'zustand'

interface StoreState {
  skill: number
  increase: (by: number) => void
}

const useStore = create<StoreState>()((set) => ({
  skill: 0,
  increase: (by) => set((state) => ({ skill: state.skill + by })),
}))

export default useStore