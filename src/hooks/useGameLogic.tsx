import { useEffect, useState } from "react";
import useStore from "../store/useStore";

function gameLoop(lastDate: number) {
    const currentTime = Date.now()
    const tick = (currentTime - lastDate) / 1000
    const increaseSkill = useStore.getState().increaseSkill
    const toJSON = useStore.getState().toJson
    const toEncoded = useStore.getState().toEncoded
    const setSkillMax = useStore.getState().setSkillMax
    const meditate = useStore.getState().meditate

    increaseSkill(tick * 0)

    toJSON()
    toEncoded()
    setSkillMax(100 + meditate * 10)

    return currentTime;
  }

export function updateGame(){
  const storage = useStore.getState().storage;
  const storageObject = JSON.parse(storage);
  const changeSkill = useStore.getState().changeSkill;
  changeSkill(parseFloat(storageObject.skill));

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
