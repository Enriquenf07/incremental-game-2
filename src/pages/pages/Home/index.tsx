import ModalView from "../../layout/Modal/ModalView"
import {useIncreaseSkill} from "./hooks/useIncreaseSkill"
import useStore from "../../../store/useStore"
import Button from "./components/Button"
import { buyUpgrade } from "../helper/buyUpgrade"
import { formatNumber } from "../../../helper/formatNumber"
import Message from "../../layout/Message"
import { useState} from 'react'


export function SandmanView(){
    const [skill, skillMod, skillMax, setSkill] = useStore((state) => [state.skill, state.increaseSkill, state.skillMax, state.changeSkill])
    const [forestIsActive, setForestFlag, setForestUp, forestUp] = useStore(state => [state.forestIsActive, state.setForestFlag, state.setForestUp, state.forestUp])
    const [generatorOne, setGeneratorOne] = useStore(state => [state.generatorOne, state.setGeneratorOne])
    const increaseSkill = useIncreaseSkill(skillMod)
    const [messageFlag, setMessageFlag] = useState(false)
    const [message, setMessage] = useState('')

    const activateForest = () => {
        if (skill >= 250 * forestUp ** 2){
            setForestFlag(true)
            setTimeout(() => {
                setForestFlag(false)
            }, 4000)
            setForestUp(forestUp + 1)
            if (forestUp == 4){
                setMessageFlag(true)
                setMessage('You decide that is time to get a job.')
                setTimeout(()=>{
                    setMessageFlag(false)
                }, 10000)
            }
        }        
    }


    if (forestIsActive){
        return(
                <div className="bg-green-800 h-full p-10 flex justify-center items-center font-mono">
                    In the forest...
                </div>
        )
    }

    return(
        <ModalView>
            <section className="flex items-center flex-wrap gap-10 py-4 justify-center">
                <Button event={() => increaseSkill(1 * forestUp + 1)}>
                    <p className="font-bold">Do a single sword moviment</p>
                    <p className="text-sm">Gain {1 * forestUp + 1} per click</p>
                </Button>
                <Button event={() => activateForest()}>
                    <h2 className="font-bold">Go to the forest</h2>
                    <p className="text-sm">Need: {formatNumber(250 * forestUp ** 2)}</p>
                </Button>
                <Button event={() => buyUpgrade(generatorOne, 100 * 1.15 ** generatorOne, setGeneratorOne, skill, setSkill)}>
                    <h2 className="font-bold">Meditate</h2>
                    <p className="text-sm">lvl {generatorOne}</p>
                    <p className="text-sm">Price: {formatNumber(100 * 1.15 ** generatorOne)}</p>
                </Button>
            </section>
            {messageFlag ? <Message text={message} flag={true}></Message> : null}
        </ModalView>
    )
}