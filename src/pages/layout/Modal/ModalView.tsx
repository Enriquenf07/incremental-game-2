import { ReactNode } from "react"

export default function ModalView({children}: {children: ReactNode}){
    return(
        <div className="bg-zinc-800 w-[70rem] min-h-screen">
            {children}
        </div>
    )
}