import  useStore  from "../../../store/useStore"
import ModalView from "../../layout/Modal/ModalView"
import useIncreaseSkill from "./hooks/useIncreaseSkill"

export function SandmanView(){
    const increaseSkill = useIncreaseSkill()
    const [toJson, toEncoded, toDecoded] = useStore((state) => [state.toJson, state.toEncoded, state.toDecoded])
    const [storage, storageEncoded] = useStore((state) => [state.storage, state.storageEncoded])

    return(
        <ModalView>
            <section className="flex items-center flex-col gap-10 pt-10">
                <button onClick={() => increaseSkill(1)} className="bg-green-800 p-4 w-[20rem] rounded-xl">Do a single sword moviment</button>
                <button onClick={() => toJson()}>toJSon</button>
                <button onClick={() => toEncoded()}>toEncoded</button>
                <button onClick={() => toDecoded()}>toDecoded</button>
                <button onClick={() => console.log(storage)}>console.log</button>
                <button onClick={() => console.log(storageEncoded)}>console.log2</button>
            </section>
        </ModalView>
    )
}