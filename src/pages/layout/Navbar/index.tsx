import Button from "./components/Button"
import { Dispatch, SetStateAction } from "react"

export default function Navbar({event}: {event: Dispatch<SetStateAction<number>>}){
    return (
        <div className="flex flex-col items-center gap-3 flex-wrap pt-10">
            <Button event={event} index={1}>Settings</Button>
            <Button event={event} index={2}>Home</Button>
            <Button event={event} index={3}>Jobs</Button>
            <Button event={event} index={4}>Shop</Button>
            <Button event={event} index={5}>Pet</Button>
        </div>
    )
}