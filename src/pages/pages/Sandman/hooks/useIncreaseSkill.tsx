export const useIncreaseSkill = (skill: number, max: number, increase: (by: number) => void) => {
    const onClickIncrease = (q: number) => {
        increase(q)
    }
    return onClickIncrease
}
