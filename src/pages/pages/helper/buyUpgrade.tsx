interface Books{
    [key: string]: number
}

export function buyUpgrade(upgrade: number, price: number, set: (q: number) => void, skill: number, setSkill: (q: number) => void){
    if(skill >= price){
        set(upgrade + 1)
        setSkill(skill - price)
    }
}

export function buyUpgrade2(index: string, books: Books, price: number, set: (q: Books) => void, skill: number, setSkill: (q: number) => void){
    const updatedBooks = { ...books, [index]: books[index] + 1 };
    if(skill >= price){
        set(updatedBooks);
        setSkill(skill - price)
    }
}