import ModalView from "../../layout/Modal/ModalView";
import Button from "./components/Button";
import { buyUpgrade } from "../helper/buyUpgrade";
import useStore from "../../../store/useStore";
import { formatNumber } from "../../../helper/formatNumber";

export default function Upgrades(){
    const [skill, setSkill, setJobOne, jobOne] = useStore(state => [state.skill, state.changeSkill, state.setJobOne, state.jobOne])
    return (
        <ModalView>
            <section className="flex items-center flex-col gap-10 pt-10">
                <Button event={() => buyUpgrade(jobOne, 1000 + 1000 * 1.30 ** jobOne, setJobOne, skill, setSkill)}>
                    <h2>Pet - {jobOne}</h2>
                    <p>For next level: {formatNumber(1000 * 1.50 ** jobOne)} skill</p> 
                </Button>
            </section>
        </ModalView>
    )
}