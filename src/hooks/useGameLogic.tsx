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
    if (currentTime > lastDate){
          const tick = (currentTime - lastDate) / 1000
          increaseSkill(tick * skillPerSec)
          setGold(gold + tick * jobOne)
          setKnowledge(knowledge + tick * bookOne)
        } 
    if (bookOne > 0) {
      bookOne > 1 ? setSkillPerSec(generatorOne * (bookOne ** 2)): setSkillPerSec(generatorOne * 2)
    }
    else{setSkillPerSec(generatorOne)}
    
    toJSON()
    toEncoded()
    

    return currentTime;
  }

export function updateGame(){
  const storage = useStore.getState().storage;
  const storageObject = JSON.parse(storage);
  const changeSkill = useStore.getState().changeSkill
  const changeForestUp = useStore.getState().setForestUp
  const setGeneratorOne = useStore.getState().setGeneratorOne
  const setJobOne = useStore.getState().setJobOne
  const setName = useStore.getState().setName
  const setBookOne = useStore.getState().setBookOne
  const setGold = useStore.getState().setGold
  const setKnowledge = useStore.getState().setKnowledge
  changeSkill(storageObject.skill)
  changeForestUp(storageObject.forestUp)
  setGeneratorOne(storageObject.generatorOne)
  setJobOne(storageObject.jobOne)
  setName(storageObject.name)
  setBookOne(storageObject.bookOne)
  setGold(storageObject.gold)
  setKnowledge(storageObject.knowledge)
}
  
export function useGameLogic() {
    const [lastDate, setLastDate] = useState(Date.now());
    const toDecoded = useStore(state => state.toDecoded)
    const storageEncoded = useStore(state => state.storageEncoded)

    useEffect(() => {
      if (storageEncoded != ''){
        toDecoded()
        updateGame()
      }   
      
      const timer = setInterval(() => {
        setLastDate((prevLastDate) => {
          return gameLoop(prevLastDate);
        });
      }, 200);
  
      if (lastDate >= 0){
        return () => clearInterval(timer);
      }
    }, []);
  }
