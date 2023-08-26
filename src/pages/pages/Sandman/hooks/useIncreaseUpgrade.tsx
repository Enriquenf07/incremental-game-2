export function useIncreaseUpgrade(skill : number, meditate: number, increase: (by: number) => void, setSkill: (by: number) => void){
    const increaseUpgrade = (q: number) => {
        if (skill >= 100 + meditate * 10){
            increase(q)
            setSkill(-(100 + meditate * 10))
        }
    }

    return increaseUpgrade
}