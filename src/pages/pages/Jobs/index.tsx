import ModalView from "../../layout/Modal/ModalView";
import Button from "./components/Button";

export default function Jobs(){
    return (
        <ModalView>
            <section className="flex items-center flex-col gap-10 pt-10">
                <Button event={() => 1}>

                    <h2>Rune Designer - 0</h2>
                    <p>For next level: 1000 skill</p> 

                </Button>
            </section>
        </ModalView>
    )
}