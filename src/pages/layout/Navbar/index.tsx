import useStore from "../../../store/useStore"
import Button from "./components/Button"
import { Dispatch, SetStateAction, useEffect } from "react"
import {IoSettingsOutline} from 'react-icons/io5'
import {AiOutlineHome, AiOutlineShop} from 'react-icons/ai'
import {BsBriefcase} from 'react-icons/bs'
import {CiBookmarkCheck} from 'react-icons/ci'
import {useState} from 'react'
import Message from "../Message"

export default function Navbar({event}: {event: Dispatch<SetStateAction<number>>}){
    const skill = useStore(state => state.skill)
    const bookOne = useStore(state => state.bookOne)
    const [messageFlag, setMessageFlag] = useState(false)
    const [message, setMessage] = useState('')
    const [flag, setFlag] = useState(0)

    useEffect(() => {
        if (skill >= 5000 && flag == 0){
            setFlag(prev => prev + 1)
        }
        if (skill >= 8000 && flag == 1){
            setFlag(prev => prev + 1)
        }        
    }, [skill])


    return (
        <div className="flex items-center gap-3 flex-wrap justify-center">
            <Button event={event} index={1}> <IoSettingsOutline size={'20px'} /> </Button>
            <Button event={event} index={6}> prestige </Button>
            <Button event={event} index={2}> <AiOutlineHome size={'20px'}/> </Button>
            {flag >= 1 ? <Button event={event} index={3}> <BsBriefcase size={'20px'} /> </Button> : null}
            {flag >= 2 ? <Button event={event} index={4}> <AiOutlineShop size={'20px'}/> </Button> : null}
            {bookOne > 0 ? <Button event={event} index={5}> <CiBookmarkCheck size={'20px'}/> </Button> : null}
            <Button event={event} index={7}> Training </Button>
            {messageFlag ? <Message text={message} flag={true}></Message> : null}
        </div>
    )
}