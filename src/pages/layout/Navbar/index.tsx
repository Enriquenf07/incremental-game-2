import useStore from "../../../store/useStore"
import Button from "./components/Button"
import { Dispatch, SetStateAction } from "react"
import {IoSettingsOutline} from 'react-icons/io5'
import {AiOutlineHome, AiOutlineShop} from 'react-icons/ai'
import {BsBriefcase} from 'react-icons/bs'
import {CiBookmarkCheck} from 'react-icons/ci'

export default function Navbar({event}: {event: Dispatch<SetStateAction<number>>}){
    const forest = useStore(state => state.forestUp)
    const bookOne = useStore(state => state.bookOne)
    return (
        <div className="flex items-center gap-3 flex-wrap justify-center">
            <Button event={event} index={1}> <IoSettingsOutline size={'20px'} /> </Button>
            <Button event={event} index={2}> <AiOutlineHome size={'20px'}/> </Button>
            {forest > 0 ? <Button event={event} index={3}> <BsBriefcase size={'20px'} /> </Button> : null}
            {forest > 0 ? <Button event={event} index={4}> <AiOutlineShop size={'20px'}/> </Button> : null}
            {bookOne >= 0 ? <Button event={event} index={5}> <CiBookmarkCheck size={'20px'}/> </Button> : null}
        </div>
    )
}