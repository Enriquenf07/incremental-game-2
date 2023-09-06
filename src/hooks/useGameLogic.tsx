import { useEffect, useState } from "react";
import useStore from "../store/useStore";

function gameLoop(lastDate: number) {
    const currentTime = Date.now()
    const increaseSkill = useStore.getState().increaseSkill
    const toJSON = useStore.getState().toJson
    const toEncoded = useStore.getState().toEncoded
    const skillPerSec = useStore.getState().skillPerSec
    const setSkillPerSec = useStore.getState().setSkillPerSec
    const setGold = useStore.getState().setGold
    const gold = useStore.getState().gold
    const jobOne = useStore.getState().jobOne
    const generatorOne = useStore.getState().generatorOne
    const bookOne = useStore.getState().bookOne
    const setKnowledge = useStore.getState().setKnowledge
    const knowledge = useStore.getState().knowledge
    const itemOne = useStore.getState().itemOne
    const books = useStore.getState().books
    const setHealth = useStore.getState().setHealth
    const health = useStore.getState().health
    const time = useStore.getState().time
    const setTime = useStore.getState().setTime
    const prestige = useStore.getState().prestige
    const techniques = useStore.getState().techniques
    const setPower = useStore.getState().setPower
    const power = useStore.getState().power
    const setSpeed = useStore.getState().setSpeed
    const speed = useStore.getState().speed
    const setPrecision = useStore.getState().setPrecision
    const precision = useStore.getState().precision
    

    if (currentTime > lastDate){
      const tick = (currentTime - lastDate) / 1000
      increaseSkill(tick * skillPerSec)
      setGold(gold + (tick * (jobOne * (books.a + 1) * (books.d * 10 + 1) * prestige)))
      bookOne > 0 ? setKnowledge(knowledge + (tick * (books.b + 1) * prestige)): null
      setTime(time + tick)
      setHealth(health + (tick * techniques.a))
      setPower(power + (tick * techniques.b))
      setSpeed(speed + (tick * techniques.c))
      setPrecision(precision + (tick * techniques.d))
    } 
    if (bookOne > 0) {
     setSkillPerSec((generatorOne * (bookOne + 1) * (books.c * 10 + 1)) * (2 ** (itemOne)) * prestige)
    }
    else{setSkillPerSec(generatorOne * (2 ** (itemOne)) * prestige)}
    
    toJSON()
    toEncoded()
    
    return currentTime;
  }

export function updateGame(){
  const storage = useStore.getState().storage;
  const storageObject = JSON.parse(storage);
  const changeSkill = useStore.getState().changeSkill
  const setGeneratorOne = useStore.getState().setGeneratorOne
  const setJobOne = useStore.getState().setJobOne
  const setName = useStore.getState().setName
  const setBookOne = useStore.getState().setBookOne
  const setGold = useStore.getState().setGold
  const setKnowledge = useStore.getState().setKnowledge
  const setItemOne = useStore.getState().setItemOne
  const setBooks = useStore.getState().setBooks
  const setItems = useStore.getState().setItems
  const setLevel = useStore.getState().setLevel
  const setTime = useStore.getState().setTime

  if (storageObject.version =='0.0.3'){
    changeSkill(storageObject.skill)
    setGeneratorOne(storageObject.generatorOne)
    setJobOne(storageObject.jobOne)
    setName(storageObject.name)
    setBookOne(storageObject.bookOne)
    setGold(storageObject.gold)
    setKnowledge(storageObject.knowledge)
    setItemOne(0)

    return
  }
  changeSkill(storageObject.skill)
  setGeneratorOne(storageObject.generatorOne)
  setJobOne(storageObject.jobOne)
  setName(storageObject.name)
  setBookOne(storageObject.bookOne)
  setGold(storageObject.gold)
  setKnowledge(storageObject.knowledge)
  setItemOne(storageObject.itemOne)
  setBooks(storageObject.books)
  setItems(storageObject.items)
  setLevel(storageObject.level)
  setTime(storageObject.time)
}
  
export function useGameLogic() {
    const [lastDate, setLastDate] = useState(Date.now());
    const toDecoded = useStore(state => state.toDecoded)
    const storageEncoded = useStore(state => state.storageEncoded)
    const pause = useStore(state => state.pauseGame)

    useEffect(() => {
        if (storageEncoded != ''){
            toDecoded()
            updateGame()
        }   

    const timer = setInterval(() => {
            setLastDate((prevLastDate) => {
                const updatedDate = gameLoop(prevLastDate)
                return updatedDate !== undefined ? updatedDate : prevLastDate
                })
        }, 200)
        
    if (lastDate >= 0){
        return () => clearInterval(timer);
    }
    }, []);
  }
