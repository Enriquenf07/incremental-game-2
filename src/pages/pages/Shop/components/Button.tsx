import { ReactNode } from "react";
import {AiOutlineInfoCircle} from 'react-icons/ai'

export default function Button({children, event}: {children: ReactNode, event:() => void}){
    return(
        <div className="flex gap-3 items-center text-xl">
            <button onClick={event} className="transition ease-in-out text-black bg-[#DFCFBE] active:bg-[#a89785] p-4 w-[10rem] rounded-xl text-sm flex flex-col items-center">
                {children}
            </button>
            <button><AiOutlineInfoCircle/></button>
        </div>
    )
}