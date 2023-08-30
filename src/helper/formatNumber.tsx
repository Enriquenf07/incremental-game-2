export function formatNumber(n: number){
    if (n >= 1000000000000) {
        return `${(n/1000000000000).toFixed(2)}Qa` 
    }
    if (n >= 1000000000) {
        return `${(n/1000000000).toFixed(2)}T` 
    }    
    if (n >= 1000000) {
        return `${(n/1000000).toFixed(2)}M` 
    }
    if (n >= 10000) {
        return `${(n/1000).toFixed(2)}K` 
    }
    return n.toFixed(1)
}