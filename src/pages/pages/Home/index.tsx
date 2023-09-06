import ModalView from "../../layout/Modal/ModalView"
import {useIncreaseSkill} from "./hooks/useIncreaseSkill"
import useStore from "../../../store/useStore"
import Button from "./components/Button"
import { buyUpgrade } from "../helper/buyUpgrade"
import { formatNumber } from "../../../helper/formatNumber"

export function SandmanView(){
    const [skill, skillMod, setSkill] = useStore((state) => [state.skill, state.increaseSkill, state.changeSkill])
    const [generatorOne, setGeneratorOne] = useStore(state => [state.generatorOne, state.setGeneratorOne])
    const increaseSkill = useIncreaseSkill(skillMod)
    const [level, setLevel] = useStore(state => [state.level, state.setLevel])
    const prestige = useStore(state => state.prestige)

    return(
        <ModalView>
            <section className="flex items-center flex-wrap gap-10 py-4 justify-center">
                <Button event={() => increaseSkill(1 * prestige)}>
                    <p className="font-bold">Do a single sword moviment</p>
                    <p className="text-sm">Gain {formatNumber(1 * prestige)} per click</p>
                </Button>
                <Button event={() => buyUpgrade(generatorOne, 100 * 1.15 ** generatorOne, setGeneratorOne, skill, setSkill)}>
                    <h2 className="font-bold">Meditate</h2>
                    <p className="text-sm">lvl {generatorOne}</p>
                    <p className="text-sm">Price: {formatNumber(100 * 1.15 ** generatorOne)}</p>
                </Button>
                
                
            </section>

        </ModalView>
    )
}