export function formatNumber(n: number){
    if (n >= 1000000000000000000) {
        return `${(n/1000000000000000000).toFixed(1)}Qi` 
    }
    if (n >= 1000000000000000) {
        return `${(n/1000000000000000).toFixed(1)}Qa` 
    }
    if (n >= 1000000000000) {
        return `${(n/1000000000000).toFixed(1)}T` 
    }
    if (n >= 1000000000) {
        return `${(n/1000000000).toFixed(1)}B` 
    }    
    if (n >= 1000000) {
        return `${(n/1000000).toFixed(1)}M` 
    }
    if (n >= 10000) {
        return `${(n/1000).toFixed(1)}K` 
    }
    return n.toFixed(1)
}