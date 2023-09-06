import { ReactNode } from "react"

export default function ModalView({children}: {children: ReactNode}){
    return(
        <div className="bg-zinc-800 w-full h-fit lg:p-20 p-0 rounded-xl ">
            {children}
        </div>
    )
}