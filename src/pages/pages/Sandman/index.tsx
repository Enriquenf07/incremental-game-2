import ModalView from "../../layout/Modal/ModalView"
import {useIncreaseSkill} from "./hooks/useIncreaseSkill"
import useStore from "../../../store/useStore"
import { useIncreaseUpgrade } from "./hooks/useIncreaseUpgrade"

export function SandmanView(){
    const [skill, increase, skillMax] = useStore((state) => [state.skill, state.increaseSkill, state.skillMax])
    const [meditate, increaseM] = useStore((state) => [state.meditate, state.increaseMeditate])

    const increaseSkill = useIncreaseSkill(skill, skillMax, increase)
    const increaseMeditate = useIncreaseUpgrade(skill, meditate, increaseM, increase)

    return(
        <ModalView>
            <section className="flex items-center flex-col gap-10 pt-10">
                <button onClick={() => increaseSkill(1)} className="bg-green-800 p-4 w-[20rem] rounded-xl">Do a single sword moviment</button>
                <button onClick={() => increaseMeditate(1)} className="bg-green-800 p-4 w-[20rem] rounded-xl">Meditate</button>
            </section>
        </ModalView>
    )
}