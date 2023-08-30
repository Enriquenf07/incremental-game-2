import { ReactNode } from "react"

export default function ModalView({children}: {children: ReactNode}){
    return(
        <div className="bg-zinc-800 w-[60rem] p-20 rounded-xl">
            {children}
        </div>
    )
}