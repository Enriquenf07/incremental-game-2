import { useEffect, useState } from "react";
import useStore from "../store/useStore";

function gameLoop(lastDate: number) {
    const currentTime = Date.now()
    const increaseSkill = useStore.getState().increaseSkill
    const toJSON = useStore.getState().toJson
    const toEncoded = useStore.getState().toEncoded
    const setSkillMax = useStore.getState().setSkillMax
    const meditate = useStore.getState().meditate
    const skillPerSec = useStore.getState().skillPerSec
    const setSkillPerSec = useStore.getState().setSkillPerSec
    if (currentTime > lastDate){
          const tick = (currentTime - lastDate) / 1000
          increaseSkill(tick * skillPerSec)
        } 
    setSkillPerSec()
    toJSON()
    toEncoded()
    setSkillMax(100 + meditate * 10)

    return currentTime;
  }

export function updateGame(){
  const storage = useStore.getState().storage;
  const storageObject = JSON.parse(storage);
  const changeSkill = useStore.getState().changeSkill
  const changeForestUp = useStore.getState().setForestUp
  const changeMeditate = useStore.getState().setMeditate
  const setGeneratorOne = useStore.getState().setGeneratorOne
  changeSkill(parseFloat(storageObject.skill))
  changeForestUp(parseInt(storageObject.forestUp))
  changeMeditate(parseInt(storageObject.meditate))
  setGeneratorOne(parseInt(storageObject.generatorOne))
}
  
export function useGameLogic() {
    const [lastDate, setLastDate] = useState(Date.now());
    const toDecoded = useStore(state => state.toDecoded)
    const storageEncoded = useStore(state => state.storageEncoded)
    const [setSkillMax, meditate] = useStore(state => [state.setSkillMax, state.meditate])

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
  
      return () => clearInterval(timer);
    }, []);
  }
