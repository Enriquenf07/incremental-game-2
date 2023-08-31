import { ReactNode } from "react";

export default function Button({children, event}: {children: ReactNode, event:() => void}){
    return(
        <button onClick={event}  className="transition ease-in-out text-white bg-[#FF6F61] active:bg-[#8a3d36] p-4 w-[12rem] h-[8rem] rounded-xl text-base flex flex-col items-center justify-center">
            {children}
        </button>
    )
}