import { ReactNode, Dispatch, SetStateAction } from "react"

export default function Button(props: {children: ReactNode, event: Dispatch<SetStateAction<number>>, index: number}){
    return(
        <button className="bg-zinc-800 rounded-lg p-2 w-32 flex justify-center" onClick={() => props.event(props.index)}>
            {props.children}
        </button>
    )
}