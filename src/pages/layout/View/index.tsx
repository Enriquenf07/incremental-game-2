import Jobs from "../../pages/Jobs"
import { SandmanView } from "../../pages/Sandman"
import SettingsView from "../../pages/Settings"

export default function View({index}: {index: number}){
    if (index == 1) {
        return(
            <SettingsView/>
        )
    }
    if (index == 2) {
        return(
            <SandmanView/>
        )
    }
    if (index == 3) {
        return(
            <Jobs/>
        )
    }  
}