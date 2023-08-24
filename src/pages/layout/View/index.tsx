import { SandmanView } from "../../pages/Sandman"

export default function View({index}: {index: number}){
    if (index == 1) {
        return(
            <div>
                oi
            </div>
        )
    }
    if (index == 2) {
        return(
            <SandmanView />
        )
    }
    if (index == 3) {
        return(
            <div>
                oi
            </div>
        )
    }

    
    
}