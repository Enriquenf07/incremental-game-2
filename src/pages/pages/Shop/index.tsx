import ModalView from "../../layout/Modal/ModalView";
import Button from "./components/Button";
import useStore from "../../../store/useStore";
import { formatNumber } from "../../../helper/formatNumber";
import { buyItem1 } from "./helper/buyItem";
import {PiPlantLight} from 'react-icons/pi'
import {FaBook} from 'react-icons/fa'
import { buyUpgrade, buyUpgrade2 } from "../helper/buyUpgrade";
import armour from '../../../assets/visored-helm.svg' 
import katana from '../../../assets/katana.svg'

export default function Shop(){
    const [gold, setGold, setSkill, skill, setBookOne, bookOne] = useStore(state => [state.gold, state.setGold, state.changeSkill, state.skill, state.setBookOne, state.bookOne])
    const [itemOne, setItemOne] = useStore(state => [state.itemOne, state.setItemOne])
    const [books, setBooks] = useStore(state => [state.books, state.setBooks])
    const [items, setItems] = useStore(state => [state.items, state.setItems])
    return (
        <ModalView>
            <section className="flex items-center flex-wrap gap-10 py-4 justify-center">
                <Button event={() => buyItem1(200000, 5000, setGold, gold, setSkill, skill)}>
                    <PiPlantLight size={'20px'} color={'green'}/>
                    <h2 className="font-bold">10 years old Blood Ginseng </h2>
                    <p className="text-sm">Costs: {formatNumber(5000)} Gold</p> 
                </Button>
                <Button event={() => buyItem1(20000000, 100000, setGold, gold, setSkill, skill)}>
                    <PiPlantLight size={'20px'} color={'green'}/>  
                    <h2 className="font-bold">100 years old Blood Ginseng </h2>
                    <p className="text-sm">Costs: {formatNumber(100000)} Gold</p>         
                </Button>
                <Button event={() => buyItem1(100000000000, 20000000, setGold, gold, setSkill, skill)}>    
                    <PiPlantLight size={'20px'} color={'green'}/>
                    <h2 className="font-bold">10 years old Blood Ginseng Pill</h2>
                    <p className="text-sm">Costs: {formatNumber(20000000)} Gold</p>         
                </Button>
                <Button event={() => buyItem1(1000000000000, 500000000, setGold, gold, setSkill, skill)}>
                    <PiPlantLight size={'20px'} color={'green'}/>   
                    <h2 className="font-bold">100 years old Blood Ginseng Pill</h2>
                    <p className="text-sm">Costs: {formatNumber(500000000)} Gold</p> 
                </Button>
                {itemOne < 7 ? <Button event={() => buyUpgrade(itemOne, 2500 + 250 * itemOne, setItemOne, gold, setGold)}>
                    <PiPlantLight size={'20px'} color={'#92A8D1'}/>
                    <h2 className="font-bold">Frost Flower</h2>
                    <p className="text-sm">Costs: {formatNumber(2500 + 250 * itemOne)} Gold</p>  
                </Button>: null}
                {bookOne == 0 ? <Button event={() => buyUpgrade(bookOne, 1000, setBookOne, gold, setGold)}>
                    <FaBook size={'20px'} color={'#2b4672'}/>
                    <h2 className="font-bold">Muscle Alteration Book</h2>
                    <p className="text-sm">Costs: {formatNumber(1000)} Gold</p>  
                </Button>: null}
                {books.a < 1 ? <Button event={() =>  buyUpgrade2('a', books, 5000, setBooks, gold, setGold)}>
                    <FaBook size={'20px'} color={'#2b4672'}/>
                    <h2 className="font-bold">Introduction to rune designer</h2>
                    <p className="text-sm">Costs: {formatNumber(5000)} Gold</p>  
                </Button>: null}
                {books.b < 1 ? <Button event={() =>  buyUpgrade2('b', books, 10000, setBooks, gold, setGold)}>
                    <FaBook size={'20px'} color={'#2b4672'}/>
                    <h2 className="font-bold">Productivity</h2>
                    <p className="text-sm">Costs: {formatNumber(10000)} Gold</p>  
                </Button>: null}
                <Button event={() =>  buyUpgrade2('a', items, 10, setItems, gold, setGold)}>
                    <img src={armour} style={{'width': '25px'}} alt="" />
                    <h2 className="font-bold">Armor</h2>
                    <p>{items.a}</p>
                    <p className="text-sm">Costs: {formatNumber(10000)} Gold</p>  
                </Button>
                <Button event={() =>  buyUpgrade2('b', items, 10, setItems, gold, setGold)}>
                    <img src={katana} style={{'width': '25px'}} alt="" />
                    <h2 className="font-bold">Katana</h2>
                    <p>{items.b}</p>
                    <p className="text-sm">Costs: {formatNumber(10000)} Gold</p>  
                </Button>
            </section>
        </ModalView>
    )
}