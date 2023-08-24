import useStore from "../../../../store/useStore"


const useIncreaseSkill = () => {
    const [skill, increase] = useStore((state) => [state.skill, state.increase])
    const onClickIncrease = (q: number) => {
        if (skill < 100) {
            increase(q)
        }
    }
    return onClickIncrease
}

export default useIncreaseSkill