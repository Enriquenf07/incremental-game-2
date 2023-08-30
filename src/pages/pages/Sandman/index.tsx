import ModalView from "../../layout/Modal/ModalView"
import {useIncreaseSkill} from "./hooks/useIncreaseSkill"
import useStore from "../../../store/useStore"
import { useIncreaseUpgrade } from "./hooks/useIncreaseUpgrade"
import Button from "./components/Button"
import { buyUpgrade } from "./helper/buyUpgrade"

export function SandmanView(){
    const [skill, skillMod, skillMax, setSkill] = useStore((state) => [state.skill, state.increaseSkill, state.skillMax, state.changeSkill])
    const [meditate, increaseM] = useStore((state) => [state.meditate, state.increaseMeditate])
    const [forestIsActive, setForestFlag, setForestUp, forestUp] = useStore(state => [state.forestIsActive, state.setForestFlag, state.setForestUp, state.forestUp])
    const [generatorOne, setGeneratorOne] = useStore(state => [state.generatorOne, state.setGeneratorOne])
    const increaseSkill = useIncreaseSkill(skill, skillMax, skillMod)
    const increaseMeditate = useIncreaseUpgrade(skill, meditate, increaseM, skillMod)

    const activateForest = () => {
        if (skill >= forestUp * 100 + 100){
            setForestFlag(true)
            setTimeout(() => {
                setForestFlag(false)
            }, 20000)
            setForestUp(forestUp + 1)
        }
        
    }

    if (forestIsActive){
        return(
                <div className="bg-green-800 h-full w-[50rem] flex justify-center items-center font-mono">
                    In the forest...
                </div>
        )
    }

    return(
        <ModalView>
            <section className="flex items-center flex-col gap-10 pt-10">
                <Button event={() => increaseSkill(1 * forestUp + 1)}>Do a single sword moviment</Button>
                <Button event={() => activateForest()}>
                    <h2>Go to the forest - {forestUp}</h2>
                    <p>price: {forestUp * 100 + 100}</p>
                </Button>
                <Button event={() => buyUpgrade(generatorOne, 200 * 1.3 ** generatorOne, setGeneratorOne, skill, setSkill)}>
                    <h2>Meditate - {generatorOne}</h2>
                    <p>Price: {200 * 1.3 ** generatorOne}</p>
                </Button>
            </section>
        </ModalView>
    )
}