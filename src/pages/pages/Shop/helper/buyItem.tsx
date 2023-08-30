export function buyItem1(gain: number, price: number, setGold: (q: number) => void, gold: number, setSkill: (q: number) => void, skill: number){
        if (gold > price){
            setSkill(skill + gain)
            setGold(gold - price)
        }
}