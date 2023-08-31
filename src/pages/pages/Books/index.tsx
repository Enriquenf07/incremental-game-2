import ModalView from "../../layout/Modal/ModalView";
import Button from "./components/Button";
import { buyUpgrade } from "../helper/buyUpgrade";
import useStore from "../../../store/useStore";
import { formatNumber } from "../../../helper/formatNumber";

export default function Books(){
    const [knowledge, setKnowledge, setBookOne, bookOne] = useStore(state => [state.knowledge, state.setKnowledge, state.setBookOne, state.bookOne])
    return (
        <ModalView>
            <section className="flex items-center flex-col gap-10 py-4">
                <div className="flex w-[95%]  items-center justify-between pb-8 border-0 border-b border-white">
                    <div>
                        <h2 className="font-bold">Muscle Alteration</h2>
                        <p className="text-sm">level {bookOne}</p>
                        <p className="text-sm">2x multiplier per level</p>
                        <p className="text-sm">1 Knowledge per sec</p>
                    </div>
                    <Button event={() => buyUpgrade(bookOne, (250 * bookOne)**1.05, setBookOne, knowledge, setKnowledge)}>
                        <p>For next level: {formatNumber((250 * bookOne) ** 1.05)} knowledge</p> 
                    </Button>
                </div>
            </section>
        </ModalView>
    )
}