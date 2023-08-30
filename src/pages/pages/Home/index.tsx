import ModalView from "../../layout/Modal/ModalView"
import {useIncreaseSkill} from "./hooks/useIncreaseSkill"
import useStore from "../../../store/useStore"
import Button from "./components/Button"
import { buyUpgrade } from "../helper/buyUpgrade"
import { formatNumber } from "../../../helper/formatNumber"

export function SandmanView(){
    const [skill, skillMod, skillMax, setSkill] = useStore((state) => [state.skill, state.increaseSkill, state.skillMax, state.changeSkill])
    const [forestIsActive, setForestFlag, setForestUp, forestUp] = useStore(state => [state.forestIsActive, state.setForestFlag, state.setForestUp, state.forestUp])
    const [generatorOne, setGeneratorOne] = useStore(state => [state.generatorOne, state.setGeneratorOne])
    const increaseSkill = useIncreaseSkill(skillMod)

    const activateForest = () => {
        if (skill >= 100 * 1.30 ** forestUp){
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
                    <p>price: {formatNumber(100 * 1.30 ** forestUp)}</p>
                </Button>
                <Button event={() => buyUpgrade(generatorOne, 200 * 1.3 ** generatorOne, setGeneratorOne, skill, setSkill)}>
                    <h2>Meditate - {generatorOne}</h2>
                    <p>Price: {formatNumber(200 * 1.3 ** generatorOne)}</p>
                </Button>
            </section>
        </ModalView>
    )
}