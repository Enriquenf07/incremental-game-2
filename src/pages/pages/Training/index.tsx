import { formatNumber } from "../../../helper/formatNumber";
import useStore from "../../../store/useStore";
import ModalView from "../../layout/Modal/ModalView";
import { buyUpgrade, buyUpgrade2, decreaseUpgrade } from "../helper/buyUpgrade";

export default function TrainigView(){
    const [skill, setSkill] = useStore(state => [state.skill, state.changeSkill])
    const [techniques, setTechniques] = useStore(state => [state.techniques, state.setTechniques])
    const [level, setLevel] = useStore(state => [state.level, state.setLevel])
    const [health, power, speed, precision] = useStore(state => [state.health, state.power, state.speed, state.precision])

    const upLevel = () => {
        if (skill > 10000 * level ** 1.2){
            setLevel(level + 1)
            buyUpgrade(level, 10000 * level ** 1.2, setLevel, skill, setSkill)
        }
    }

    const decreaseTec = (val: number, i: string) => {
        if (val > 0){
            decreaseUpgrade(i, techniques, 1, setTechniques, level, setLevel)
        }
        
    }

    const increaseTec = (i: string) => {
        buyUpgrade2(i, techniques, 1, setTechniques, level, setLevel)
    }

    return(
        <>
            <ModalView>
                <section className="flex flex-col items-center flex-wrap py-5 justify-center">
                    <p className="text-red-500 font-medium text-lg">Health: {formatNumber(health)}</p>
                    <p className="text-green-300 font-medium text-lg">Power: {formatNumber(power)}</p>
                    <p className="text-blue-300 font-medium text-lg">Speed: {formatNumber(speed)}</p>
                    <p className="text-yellow-300 font-medium text-lg">Precision: {formatNumber(precision)}</p>
                </section>
            </ModalView>
            <ModalView>
                <section className="flex items-center flex-wrap gap-10 justify-center">
                    <button className="h-full w-full bg-blue-400 py-4 rounded-xl text-zinc-800 hover:bg-blue-300" onClick={() => upLevel()}>
                        <h2 className="font-bold">Upgrade Level</h2>
                        <p className="text-sm">Price: {formatNumber(1000 ** level)}</p>
                    </button>
                </section>
            </ModalView>
            
            <ModalView>
                <section className="flex items-center flex-wrap gap-10 py-4 justify-center">
                    <h2 className="font-medium text-xl text-blue-300">{level} points</h2>
                    <div className="flex w-[95%] items-center justify-between pb-8 border-0 border-b border-white">
                        <div>
                            <h2 className="font-bold">Body Training</h2>
                            <p className="text-sm">Upgrade Health/s</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <button onClick={() => decreaseTec(techniques.a, 'a')} className="text-lg rounded-full bg-blue-300 w-6 flex justify-center items-center text-black">-</button>
                            <p>{(techniques.a).toFixed()}</p>
                            <button onClick={() => increaseTec('a')} className="mr-4 text-lg rounded-full bg-blue-300 w-6 flex justify-center items-center text-black">+</button>
                        </div>
                    </div>
                    <div className="flex w-[95%] items-center justify-between pb-8 border-0 border-b border-white">
                        <div>
                            <h2 className="font-bold">Graceful Sword Training</h2>
                            <p className="text-sm">Upgrade Power/s</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <button onClick={() => decreaseTec(techniques.b, 'b')} className="text-lg rounded-full bg-blue-300 w-6 flex justify-center items-center text-black">-</button>
                            <p>{(techniques.b).toFixed()}</p>
                            <button onClick={() => increaseTec('b')} className="mr-4 text-lg rounded-full bg-blue-300 w-6 flex justify-center items-center text-black">+</button>
                        </div>
                    </div>
                    <div className="flex w-[95%] items-center justify-between pb-8 border-0 border-b border-white">
                        <div>
                            <h2 className="font-bold">Illusionary Escape Technique Training</h2>
                            <p className="text-sm">Upgrade Speed/s</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <button onClick={() => decreaseTec(techniques.c, 'c')} className="text-lg rounded-full bg-blue-300 w-6 flex justify-center items-center text-black">-</button>
                            <p>{(techniques.c).toFixed()}</p>
                            <button onClick={() => increaseTec('c')} className="mr-4 text-lg rounded-full bg-blue-300 w-6 flex justify-center items-center text-black">+</button>
                        </div>
                    </div>
                    <div className="flex w-[95%] items-center justify-between pb-8 border-0 border-b border-white">
                        <div>
                            <h2 className="font-bold">Divine Technique of Forethought </h2>
                            <p className="text-sm">Upgrade Precision/s</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <button onClick={() => decreaseTec(techniques.d, 'd')} className="text-lg rounded-full bg-blue-300 w-6 flex justify-center items-center text-black">-</button>
                            <p>{(techniques.d).toFixed()}</p>
                            <button onClick={() => increaseTec('d')} className="mr-4 text-lg rounded-full bg-blue-300 w-6 flex justify-center items-center text-black">+</button>
                        </div>
                    </div>
                </section>
            </ModalView>
        </>
        
    )
}