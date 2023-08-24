import useStore from "../../../store/useStore"
import ModalView from "../../layout/Modal/ModalView"
import useIncreaseSkill from "./hooks/useIncreaseSkill"

export function SandmanView(){
    const increaseSkill = useIncreaseSkill()

    return(
        <ModalView>
            <section className="flex items-center flex-col gap-10 pt-10">
                <button onClick={() => increaseSkill(1)} className="bg-green-800 p-4 w-[20rem] rounded-xl">Do a single sword moviment</button>
            </section>
        </ModalView>
    )
}