import { ReactNode } from "react";

export default function Button({children, event}: {children: ReactNode, event:() => void}){
    return(
        <button onClick={event} className="transition ease-in-out text-white bg-[#2b4672] hover:bg-[#253c64] p-4 w-[12rem] h-[8rem] rounded-xl text-base flex flex-col items-center justify-center gap-1">{children}</button>
    )
}