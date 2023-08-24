import { create } from 'zustand'

interface StoreState {
  skill: number
  storage: string
  storageEncoded: string
  increase: (by: number) => void
  toJson: () => void
  toEncoded: () => void
  toDecoded: () => void
  }

const useStore = create<StoreState>()((set) => ({
  skill: 0,
  storage: '',   
  storageEncoded: '',
  toJson: () => set((state) => ({storage: JSON.stringify({'skill': '' + state.skill})})),
  toEncoded: () => set((state) => ({storageEncoded: btoa(state.storage)})),
  toDecoded: () => set((state) => ({storage: atob(state.storageEncoded)})),
  increase: (by) => set((state) => ({ skill: state.skill + by })),
}))

export default useStore