import useStore from "../../../store/useStore"
import Button from "./components/Button"
import { Dispatch, SetStateAction } from "react"
import {IoSettingsOutline} from 'react-icons/io5'
import {AiOutlineHome} from 'react-icons/ai'

export default function Navbar({event}: {event: Dispatch<SetStateAction<number>>}){
    const forest = useStore(state => state.forestUp)
    const bookOne = useStore(state => state.bookOne)
    return (
        <div className="flex items-center gap-3 flex-wrap justify-center">
            <Button event={event} index={1}> <IoSettingsOutline size={'20px'} /> </Button>
            <Button event={event} index={2}> <AiOutlineHome size={'20px'}/> </Button>
            {forest > 4 ? <Button event={event} index={3}>Jobs</Button> : null}
            {forest > 7 ? <Button event={event} index={4}>Shop</Button> : null}
            {bookOne > 0 ? <Button event={event} index={5}>Books</Button> : null}
        </div>
    )
}