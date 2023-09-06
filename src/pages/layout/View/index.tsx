import Jobs from "../../pages/Jobs"
import { SandmanView } from "../../pages/Home"
import SettingsView from "../../pages/Settings"
import Shop from "../../pages/Shop"
import Books from "../../pages/Books"
import PrestigeView from "../../pages/Prestige"
import TrainigView from "../../pages/Training"

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
    if (index == 4) {
        return(
            <Shop/>
        )
    } 
    if (index == 5) {
        return(
            <Books/>
        )
    } 
    if (index == 6) {
        return(
            <PrestigeView/>
        )
    } 
    if (index == 7){
        return(
            <TrainigView/>
        )
    }    
}