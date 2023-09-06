import { formatNumber } from "../../../helper/formatNumber";
import useStore from "../../../store/useStore";
import ModalView from "../../layout/Modal/ModalView";

export default function PrestigeView(){
    const [prestige, prestigeFunc] = useStore(state => [state.prestige, state.prestigeFunc])
    const skill = useStore(state => state.skill)
    const time = useStore(state => state.time)
    const setPause = useStore(state => state.setPause)

    function prestigeCalc(){
        if (time > 3600){
            return (Math.log(skill)**1.1)
        }
        if (time > 2000){
            return (Math.log(skill))
        }
        if (time > 1800){
            return (Math.log(skill)/2)
        }
        if (time > 360){
            return (Math.log(skill)/5)
        }
        return (Math.log(skill)/10)
    }

    function handlePrestige(){
        if (prestige < prestigeCalc()){
            const value = prestigeCalc()
            prestigeFunc(value)
            setTimeout(() => {
                prestigeFunc(value)
            }, 200)
        }
    }

    return(
        <>
            <ModalView>
                <section className="flex-col flex gap-10 items-center py-4 px-4">
                    <p>{new Date(time * 1000).toISOString().slice(11, 19)} since last rebirth</p>
                    <p className="text-lg font-medium">Prestige Multiplier: {formatNumber(prestige)}x</p>
                    <div className="flex flex-col items-center gap-1">
                        <h2 className="text-xl font-medium text-purple-500 text-center">Reset your game and set prestige multiplier to {formatNumber(prestigeCalc())}x</h2>
                        <h3 className="text-sm font-medium text-yellow-300 text-center w-[80%]">Prestige multiplier influences Skill, Gold and Knowledge gain</h3>
                    </div>
                    <button className={prestige > prestigeCalc() ?"bg-purple-300 p-5 rounded-xl px-9 cursor-not-allowed" :"bg-purple-800 p-5 rounded-xl px-9"} onClick={() => handlePrestige()}>Prestige</button>
                </section>
            </ModalView>
        </>
        
    )
}