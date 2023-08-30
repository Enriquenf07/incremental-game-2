import { ReactNode } from "react";

export default function Button({children, event}: {children: ReactNode, event:() => void}){
    return(
        <button onClick={event} className="transition ease-in-out bg-[#C3447A] active:bg-[#2b4672] p-4 w-[20rem] rounded-xl flex flex-col items-center">
            {children}
        </button>
    )
}