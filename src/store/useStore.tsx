import { create } from 'zustand'
import {persist} from 'zustand/middleware'
import Decimal from 'break_infinity.js'

interface Books{
  [key: string]: number
}

interface Dict{
  [key: string]: number
}

interface StoreState {
  skill: number
  storage: string
  storageEncoded: string
  message: string
  skillPerSec: number
  generatorOne: number
  jobOne: number
  gold: number
  name: string
  bookOne: number
  knowledge: number
  itemOne: number
  books: Books
  prestige: number
  level: number
  health: number
  items: Dict
  time: number
  pauseGame: boolean
  techniques: Dict
  tecPoints: number
  power: number
  speed: number
  precision: number

  increaseSkill: (by: number) => void
  toJson: () => void
  toEncoded: () => void
  toDecoded: () => void
  resetEncoded: () => void
  changeSkill: (newSkill: number) => void
  setMessage: (message: string) => void
  setEncoded: (save: string) => void
  setSkillPerSec: (n: number) => void
  setGeneratorOne: (n: number) => void
  setJobOne: (n: number) => void
  setGold: (n: number) => void
  setName: (n: string) => void
  setBookOne: (n: number) => void
  setKnowledge: (n: number) => void
  setItemOne: (n: number) => void
  setBooks: (n: Books) => void
  setPrestige: (n: number) => void
  setLevel: (n: number) => void
  setHealth: (n: number) => void
  setItems: (n: Dict) => void
  setTime: (n: number) => void
  prestigeFunc: (n: number) => void
  setPause: (n: boolean) => void
  setTechniques: (n: Dict) => void
  setTecPoints: (n: number) => void
  setPower: (n: number) => void
  setSpeed: (n: number) => void
  setPrecision: (n: number) => void
  }

const useStore = create<StoreState>()(
  persist(
    (set) => ({
    skill: 0,
    storage: '',    
    storageEncoded: '',
    message: '',
    skillPerSec: 0,
    generatorOne: 0,
    jobOne: 0,
    gold: 0,
    name: '',
    bookOne: 0,
    knowledge: 0,
    itemOne: 0,
    books: {'a': 0, 'b': 0, 'c':0, 'd': 0},
    prestige: 1,
    level: 0,
    health: 0,
    items: {'a': 0, 'b': 0},
    time: 0,
    pauseGame: false,
    techniques: {'a': 0, 'b': 0, 'c':0, 'd': 0},
    tecPoints: 0,
    power: 0,
    speed: 0,
    precision: 0,
    
    toJson: () => set((state) => ({storage: JSON.stringify({
      'version': '0.2.0',
      'skill': state.skill,
      'gold': state.gold,
      'generatorOne': state.generatorOne,
      'jobOne': state.jobOne,
      'name': state.name,
      'bookOne': state.bookOne,
      'knowledge': state.knowledge,
      'itemOne': state.itemOne,
      'books': state.books,
      'level': state.level,
      'items': state.items,
      'time': state.time,
    })})),
    toEncoded: () => set((state) => ({storageEncoded: btoa(state.storage)})),
    resetEncoded: () => set({storageEncoded: ''}),
    toDecoded: () => set((state) => ({storage: atob(state.storageEncoded)})),
    increaseSkill: (by) => set((state) => ({ skill: state.skill + by })),
    changeSkill: (newSkill) => set({skill: newSkill}),
    setSkillPerSec: (newState) => set({skillPerSec: newState}),
    setMessage: (message) => set({message: message}),
    setEncoded: (save) => set({storageEncoded: save}),
    setGeneratorOne: (newState) => set({generatorOne: newState}),
    setJobOne: (newState) => set({jobOne: newState}),
    setGold: (newState) => set({gold: newState}),
    setName: (newState) => set({name: newState}),
    setBookOne: (newState) => set({bookOne: newState}),
    setKnowledge: (newState) => set({knowledge: newState}),
    setItemOne: (newState) => set({itemOne: newState}),
    setBooks: (newState) => set({books: newState}),
    setPrestige: (newState) => set({prestige: newState}),
    setLevel: (newState) => set({level: newState}),
    setHealth: (newState) => set({health: newState}),
    setItems: (newState) =>set({items: newState}),
    setTime: (newState) => set({time: newState}),
    prestigeFunc: (newState) => set({
      prestige: newState,
      skill: 0,
      gold: 0,
      generatorOne: 0,
      jobOne: 0,
      bookOne: 0,
      knowledge: 0,
      itemOne: 0,
      books: {'a': 0, 'b': 0, 'c':0, 'd': 0},
      items: {'a': 0, 'b': 0},
      level: 0,
      time: 0,
    }),
    setPause: (newState) => set({pauseGame: newState}),
    setTechniques: (newState) => set({techniques: newState}),
    setTecPoints: (newState) => set({tecPoints: newState}),
    setPower: (newState) => set({power: newState}),
    setSpeed: (newState) => set({speed: newState}),
    setPrecision: (newState) => set({precision: newState}),
  }),
  {
    name: 'save',
    partialize: (state) => ({ storageEncoded: state.storageEncoded }),
  }
  ))

export default useStore