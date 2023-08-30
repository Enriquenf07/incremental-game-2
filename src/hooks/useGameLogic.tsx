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
    if (currentTime > lastDate){
          const tick = (currentTime - lastDate) / 1000
          increaseSkill(tick * skillPerSec)
          setGold(gold + tick * jobOne)
        } 
    setSkillPerSec(generatorOne)
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
  changeSkill(parseFloat(storageObject.skill))
  changeForestUp(parseInt(storageObject.forestUp))
  setGeneratorOne(parseInt(storageObject.generatorOne))
  setJobOne(parseInt(storageObject.jobOne))
  setName(storageObject.name)
}
  
export function useGameLogic() {
    const [lastDate, setLastDate] = useState(Date.now());
    const toDecoded = useStore(state => state.toDecoded)
    const storageEncoded = useStore(state => state.storageEncoded)

    const [times, setTimes] = useState(0)

    useEffect(() => {
      if (storageEncoded != ''){
        toDecoded()
        updateGame()
      }   
      
      const timer = setInterval(() => {
        setTimes(prev => prev + 0.2)
        setLastDate((prevLastDate) => {
          return gameLoop(prevLastDate);
        });
        
      }, 200);
  
      return () => clearInterval(timer);
    }, []);
  }
