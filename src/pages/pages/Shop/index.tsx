import ModalView from "../../layout/Modal/ModalView";
import Button from "./components/Button";
import useStore from "../../../store/useStore";
import { formatNumber } from "../../../helper/formatNumber";
import { buyItem1 } from "./helper/buyItem";

export default function Shop(){
    const [gold, setGold, setSkill, skill] = useStore(state => [state.gold, state.setGold, state.changeSkill, state.skill])
    return (
        <ModalView>
            <section className="flex items-center flex-col gap-10 pt-10">
                <Button event={() => buyItem1(20000, 5000, setGold, gold, setSkill, skill)}>
                    <h2>10 years old Ginseng Pill</h2>
                    <p>Costs: {formatNumber(5000 * 1.50 ** 0)} Gold</p> 
                </Button>
            </section>
        </ModalView>
    )
}