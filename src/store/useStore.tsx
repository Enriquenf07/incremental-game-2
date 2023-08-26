import { create } from 'zustand'
import {persist} from 'zustand/middleware'

interface StoreState {
  skill: number
  skillMax: number
  storage: string
  storageEncoded: string
  message: string
  meditate: number

  increaseSkill: (by: number) => void
  setSkillMax: (newMax: number) => void
  increaseMeditate: (by: number) => void
  toJson: () => void
  toEncoded: () => void
  toDecoded: () => void
  resetEncoded: () => void
  changeSkill: (newSkill: number) => void
  setMessage: (message: string) => void
  setEncoded: (save: string) => void
  }


const useStore = create<StoreState>()(
  persist(
    (set) => ({
    skill: 0,
    skillMax: 100,
    storage: '',    
    storageEncoded: '',
    message: '',
    meditate: 0,


    toJson: () => set((state) => ({storage: JSON.stringify({'skill': '' + state.skill})})),
    toEncoded: () => set((state) => ({storageEncoded: btoa(state.storage)})),
    resetEncoded: () => set({storageEncoded: ''}),
    toDecoded: () => set((state) => ({storage: atob(state.storageEncoded)})),
    increaseSkill: (by) => set((state) => ({ skill: state.skill + by })),
    changeSkill: (newSkill) => set({skill: newSkill}),
    setSkillMax: (newMax) => set(({ skillMax: newMax })),
    setMessage: (message) => set({message: message}),
    setEncoded: (save) => set({storageEncoded: save}),
    increaseMeditate: (by) => set(state => ({meditate: state.meditate + by}))
  }),
  {
    name: 'save',
    partialize: (state) => ({ storageEncoded: state.storageEncoded }),
  }
  ))

export default useStore