import { create } from 'zustand'
import {persist} from 'zustand/middleware'

interface StoreState {
  skill: number
  skillMax: number
  storage: string
  storageEncoded: string
  message: string
  forestIsActive: boolean
  forestUp: number
  skillPerSec: number
  generatorOne: number
  jobOne: number
  gold: number
  name: string
  bookOne: number
  knowledge: number
  itemOne: number

  increaseSkill: (by: number) => void
  setSkillMax: (newMax: number) => void
  toJson: () => void
  toEncoded: () => void
  toDecoded: () => void
  resetEncoded: () => void
  changeSkill: (newSkill: number) => void
  setMessage: (message: string) => void
  setEncoded: (save: string) => void
  setForestFlag: (flag: boolean) => void
  setForestUp: (q: number) => void
  setSkillPerSec: (n: number) => void
  setGeneratorOne: (n: number) => void
  setJobOne: (n: number) => void
  setGold: (n: number) => void
  setName: (n: string) => void
  setBookOne: (n: number) => void
  setKnowledge: (n: number) => void
  setItemOne: (n: number) => void

  }


const useStore = create<StoreState>()(
  persist(
    (set) => ({
    skill: 0,
    skillMax: 100,
    storage: '',    
    storageEncoded: '',
    message: '',
    forestIsActive: false,
    forestUp: 0,
    skillPerSec: 0,
    generatorOne: 0,
    jobOne: 0,
    gold: 0,
    name: '',
    bookOne: 0,
    knowledge: 0,
    itemOne: 0,

    toJson: () => set((state) => ({storage: JSON.stringify({
      'version': '0.1.0',
      'skill': state.skill,
      'gold': state.gold,
      'forestUp': state.forestUp,
      'generatorOne': state.generatorOne,
      'jobOne': state.jobOne,
      'name': state.name,
      'bookOne': state.bookOne,
      'knowledge': state.knowledge,
      'itemOne': state.itemOne
  })})),
    toEncoded: () => set((state) => ({storageEncoded: btoa(state.storage)})),
    resetEncoded: () => set({storageEncoded: ''}),
    toDecoded: () => set((state) => ({storage: atob(state.storageEncoded)})),
    increaseSkill: (by) => set((state) => ({ skill: state.skill + by })),
    changeSkill: (newSkill) => set({skill: newSkill}),
    setSkillMax: (newMax) => set(({ skillMax: newMax })),
    setMessage: (message) => set({message: message}),
    setEncoded: (save) => set({storageEncoded: save}),
    setForestFlag: (flag) => set({forestIsActive: flag}),
    setForestUp: (q) => set({forestUp: q}),
    setSkillPerSec: (newState) => set({skillPerSec: newState}),
    setGeneratorOne: (newState) => set({generatorOne: newState}),
    setJobOne: (newState) => set({jobOne: newState}),
    setGold: (newState) => set({gold: newState}),
    setName: (newState) => set({name: newState}),
    setBookOne: (newState) => set({bookOne: newState}),
    setKnowledge: (newState) => set({knowledge: newState}),
    setItemOne: (newState) => set({itemOne: newState})
  }),
  {
    name: 'save',
    partialize: (state) => ({ storageEncoded: state.storageEncoded }),
  }
  ))

export default useStore