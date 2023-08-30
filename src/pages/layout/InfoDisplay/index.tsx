import useStore from "../../../store/useStore"

export default function InfoDisplay(){
    const skill = useStore((state) => state.skill)
    const skillMax = useStore(state => state.skillMax)
    const skillPerSec = useStore(state => state.skillPerSec)
    
    return(
        <div className="bg-zinc-800 rounded-xl w-full flex flex-col justify-center items-center py-20">
            <p>Skill: {skill.toFixed()}</p>
            <p>Skill/sec: {skillPerSec.toFixed()}</p>
            <p>total</p>
        </div>
    )
}