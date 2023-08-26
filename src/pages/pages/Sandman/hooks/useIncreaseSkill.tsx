export const useIncreaseSkill = (skill: number, max: number, increase: (by: number) => void) => {
    
    const onClickIncrease = (q: number) => {
        if (skill < max) {
            increase(q)
        }
    }
    return onClickIncrease
}
