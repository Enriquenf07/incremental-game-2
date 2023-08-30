import { useState } from "react"
import { formatNumber } from "../../../helper/formatNumber"
import useStore from "../../../store/useStore"
import { BsPencilSquare, BsCheck2 } from 'react-icons/bs'

export default function InfoDisplay(){
    const skill = useStore((state) => state.skill)
    const skillMax = useStore(state => state.skillMax)
    const skillPerSec = useStore(state => state.skillPerSec)
    const gold = useStore(state => state.gold)
    const [nameEditingFlag, setNameEditingFlag] = useState(false)
    const [name, setName] = useStore(state => [state.name, state.setName])
    
    return(
        <div className="bg-zinc-800 rounded-xl w-full flex flex-col justify-center items-center py-14">
            <div className="flex gap-2 items-center pb-5">
               {nameEditingFlag ? <input type="text" className="w-[7rem] border-b-white border-0 border-b bg-zinc-800 focus:outline-none" onChange={(e) => setName(e.target.value)} /> : <p>{name}</p>}
               <button onClick={() => setNameEditingFlag(prev => !prev)} className="text-xs">{nameEditingFlag ? <BsCheck2/> : <BsPencilSquare/>}</button> 
            </div>           
            <p>Skill {formatNumber(skill)}</p>
            <p>Skill/Sec: {formatNumber(skillPerSec)}</p>
            <p>Gold: {formatNumber(gold)}</p>
        </div>
    )
}