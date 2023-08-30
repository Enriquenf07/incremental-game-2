import { create } from 'zustand'
import {persist} from 'zustand/middleware'

interface StoreState {
  skill: number
  skillMax: number
  storage: string
  storageEncoded: string
  message: string
  meditate: number
  forestIsActive: boolean
  forestUp: number
  skillPerSec: number
  generatorOne: number

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
  setForestFlag: (flag: boolean) => void
  setForestUp: (q: number) => void
  setMeditate: (q: number) => void
  setSkillPerSec: () => void
  setGeneratorOne: (n: number) => void
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
    forestIsActive: false,
    forestUp: 0,
    skillPerSec: 0,
    generatorOne: 0,

    toJson: () => set((state) => ({storage: JSON.stringify({'skill': '' + state.skill, 'meditate': '' + state.meditate, 'forestUp': '' + state.forestUp, 'generatorOne': '' + state.generatorOne})})),
    toEncoded: () => set((state) => ({storageEncoded: btoa(state.storage)})),
    resetEncoded: () => set({storageEncoded: ''}),
    toDecoded: () => set((state) => ({storage: atob(state.storageEncoded)})),
    increaseSkill: (by) => set((state) => ({ skill: state.skill + by })),
    changeSkill: (newSkill) => set({skill: newSkill}),
    setSkillMax: (newMax) => set(({ skillMax: newMax })),
    setMessage: (message) => set({message: message}),
    setEncoded: (save) => set({storageEncoded: save}),
    increaseMeditate: (by) => set(state => ({meditate: state.meditate + by})),
    setMeditate: (q) => set({meditate: q}),
    setForestFlag: (flag) => set({forestIsActive: flag}),
    setForestUp: (q) => set({forestUp: q}),
    setSkillPerSec: () => set((state) => ({skillPerSec: state.generatorOne})),
    setGeneratorOne: (newState) => set({generatorOne: newState})
  }),
  {
    name: 'save',
    partialize: (state) => ({ storageEncoded: state.storageEncoded }),
  }
  ))

export default useStore