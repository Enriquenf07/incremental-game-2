export function buyUpgrade(upgrade: number, price: number, set: (q: number) => void, skill: number, setSkill: (q: number) => void){
    if(skill >= price){
        set(upgrade + 1)
        setSkill(skill - price)
    }
}