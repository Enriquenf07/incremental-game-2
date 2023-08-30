export const useIncreaseSkill = (increase: (by: number) => void) => {
    const onClickIncrease = (q: number) => {
        increase(q)
    }
    return onClickIncrease
}
