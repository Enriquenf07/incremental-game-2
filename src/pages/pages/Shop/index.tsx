import ModalView from "../../layout/Modal/ModalView";
import Button from "./components/Button";
import useStore from "../../../store/useStore";
import { formatNumber } from "../../../helper/formatNumber";
import { buyItem1 } from "./helper/buyItem";
import {PiPlantLight} from 'react-icons/pi'
import {FaBook} from 'react-icons/fa'
import { buyUpgrade } from "../helper/buyUpgrade";

export default function Shop(){
    const [gold, setGold, setSkill, skill, setBookOne, bookOne] = useStore(state => [state.gold, state.setGold, state.changeSkill, state.skill, state.setBookOne, state.bookOne])
    const [itemOne, setItemOne] = useStore(state => [state.itemOne, state.setItemOne])

    return (
        <ModalView>
            <section className="flex items-center flex-wrap gap-10 py-4 justify-center">
                <Button event={() => buyItem1(20000, 5000, setGold, gold, setSkill, skill)}>
                    <PiPlantLight size={'20px'} color={'green'}/>
                    <h2 className="font-bold">10 years old Blood Ginseng </h2>
                    <p className="text-sm">Costs: {formatNumber(5000)} Gold</p> 
                </Button>
                <Button event={() => buyItem1(1000000, 100000, setGold, gold, setSkill, skill)}>
                    <PiPlantLight size={'20px'} color={'green'}/>  
                    <h2 className="font-bold">100 years old Blood Ginseng </h2>
                    <p className="text-sm">Costs: {formatNumber(100000)} Gold</p>         
                </Button>
                <Button event={() => buyItem1(100000000, 20000000, setGold, gold, setSkill, skill)}>    
                    <PiPlantLight size={'20px'} color={'green'}/>
                    <h2 className="font-bold">10 years old Blood Ginseng Pill</h2>
                    <p className="text-sm">Costs: {formatNumber(20000000)} Gold</p>         
                </Button>
                <Button event={() => buyItem1(1000000000, 500000000, setGold, gold, setSkill, skill)}>
                    <PiPlantLight size={'20px'} color={'green'}/>   
                    <h2 className="font-bold">100 years old Blood Ginseng Pill</h2>
                    <p className="text-sm">Costs: {formatNumber(500000000)} Gold</p> 
                </Button>
                {bookOne == 0 ? <Button event={() => buyUpgrade(bookOne, 1000, setBookOne, gold, setGold)}>
                    <FaBook size={'20px'} color={'#2b4672'}/>
                    <h2 className="font-bold">Muscle Alteration Book</h2>
                    <p className="text-sm">Costs: {formatNumber(1000)} Gold</p>  
                </Button>: null}
                {itemOne < 7 ? <Button event={() => buyUpgrade(itemOne, 2500 + 250 * itemOne, setItemOne, gold, setGold)}>
                    <PiPlantLight size={'20px'} color={'#92A8D1'}/>
                    <h2 className="font-bold">Frost Flower</h2>
                    <p className="text-sm">Costs: {formatNumber(2500 + 250 * itemOne)} Gold</p>  
                </Button>: null}
            </section>
        </ModalView>
    )
}