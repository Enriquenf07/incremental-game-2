import ModalView from "../../layout/Modal/ModalView";
import Button from "./components/Button";
import { buyUpgrade, buyUpgrade2 } from "../helper/buyUpgrade";
import useStore from "../../../store/useStore";
import { formatNumber } from "../../../helper/formatNumber";

export default function Books(){
    const [knowledge, setKnowledge, setBookOne, bookOne, setBooks, books] = useStore(state => [state.knowledge, state.setKnowledge, state.setBookOne, state.bookOne, state.setBooks, state.books])
    
    
    return (
        <ModalView>
            <section className="flex items-center flex-col gap-10 py-4">
                {bookOne > 0 && bookOne <= 99 ?
                    <div className="flex w-[95%]  items-center justify-between pb-8 border-0 border-b border-white">
                        <div>
                            <h2 className="font-bold">Muscle Alteration</h2>
                            <p className="text-sm">level {bookOne}/100</p>
                            <p className="text-sm">Add {100 * bookOne}% to the base meditation gain</p>
                        </div>
                        <Button event={() => buyUpgrade(bookOne, (250 * bookOne)**1.02, setBookOne, knowledge, setKnowledge)}>
                            <p>For next level: {formatNumber((250 * bookOne) ** 1.02)} knowledge</p> 
                        </Button>
                    </div>
                :null}
                {books.a > 0 && books.a <= 99?
                    <div className="flex w-[95%]  items-center justify-between pb-8 border-0 border-b border-white">
                        <div>
                            <h2 className="font-bold">Introduction to Rune Designer</h2>
                            <p className="text-sm">level {books.a}/100</p>
                            <p className="text-sm">Add {100 * books.a}% to the base rune designer gain</p>
                        </div>
                        <Button event={() => buyUpgrade2('a', books, (300 * books.a)**1.02, setBooks, knowledge, setKnowledge)}>
                            <p>For next level: {formatNumber((300 * books.a) ** 1.02)} knowledge</p> 
                        </Button>
                    </div>
                :null}
                {books.b > 0 && books.b <= 99 ?
                    <div className="flex w-[95%]  items-center justify-between pb-8 border-0 border-b border-white">
                        <div>
                            <h2 className="font-bold">Productivity book</h2>
                            <p className="text-sm">level {books.b}/100</p>
                            <p className="text-sm">Add {books.b} Knowledge per sec</p>
                        </div>
                        <Button event={() => buyUpgrade2('b', books, (30 * books.b)**1.02, setBooks, knowledge, setKnowledge)}>
                            <p>For next level: {formatNumber((30 * books.b)** 1.02)} knowledge</p> 
                        </Button>
                    </div>
                :null}
                {bookOne >= 100 && books.c <= 99 ?
                    <div className="flex w-[95%]  items-center justify-between pb-8 border-0 border-b border-white">
                        <div>
                            <h2 className="font-bold">Golden Bone Formula</h2>
                            <p className="text-sm">level {books.c}/100</p>
                            <p className="text-sm">Add {1000 * books.c}% to the base meditation gain</p>
                        </div>
                        <Button event={() => buyUpgrade2('c', books, (20000 * books.c)**1.02, setBooks, knowledge, setKnowledge)}>
                            <p>For next level: {formatNumber((20000 * books.c) ** 1.02)} knowledge</p> 
                        </Button>
                    </div>
                :null}
                {books.a >= 100 && books.d <= 99 ?
                    <div className="flex w-[95%]  items-center justify-between pb-8 border-0 border-b border-white">
                        <div>
                            <h2 className="font-bold">Advanced theory about rune design</h2>
                            <p className="text-sm">level {books.d}/100</p>
                            <p className="text-sm">Add {1000 * books.d}% to the base gold gain</p>
                        </div>
                        <Button event={() => buyUpgrade2('d', books, (50000 * books.d)**1.02, setBooks, knowledge, setKnowledge)}>
                            <p>For next level: {formatNumber((50000 * books.d) ** 1.02)} knowledge</p> 
                        </Button>
                    </div>
                :null}
            </section>
        </ModalView>
    )
}