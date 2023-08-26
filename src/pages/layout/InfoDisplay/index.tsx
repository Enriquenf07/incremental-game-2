import useStore from "../../../store/useStore"

export default function InfoDisplay(){
    const skill = useStore((state) => state.skill)
    const skillMax = useStore(state => state.skillMax)
    
    return(
        <div className="bg-zinc-800 rounded-xl w-full flex flex-col justify-center items-center py-20">
            <p>Skill: {skill.toFixed()}/{skillMax}</p>
            <p>Time</p>
            <p>total</p>
        </div>
    )
}