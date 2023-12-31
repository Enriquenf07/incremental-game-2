import ModalView from "../../layout/Modal/ModalView";
import Button from "./components/Button";
import { buyUpgrade } from "../helper/buyUpgrade";
import useStore from "../../../store/useStore";
import { formatNumber } from "../../../helper/formatNumber";

export default function Jobs(){
    const [skill, setSkill, setJobOne, jobOne] = useStore(state => [state.skill, state.changeSkill, state.setJobOne, state.jobOne])
    return (
        <ModalView>
            <section className="flex items-center flex-wrap gap-10 py-4 justify-center">
                <div className="flex w-[95%] items-center justify-between pb-8 border-0 border-b border-white">
                    <div>
                        <h2 className="font-bold">Rune Designer</h2>
                        <p className="text-sm">level {jobOne}</p>
                        <p className="text-sm">{jobOne} gold per sec</p>
                    </div>
                    <Button event={() => buyUpgrade(jobOne, 1000 * 1.3 ** jobOne, setJobOne, skill, setSkill)}>
                        <p>For next level: {formatNumber(1000 * 1.3 ** jobOne)} skill</p> 
                    </Button>
                </div>
            </section>
        </ModalView>
    )
}