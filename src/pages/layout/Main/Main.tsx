import { useState } from "react"
import Navbar from "../Navbar"
import View from "../View"
import InfoDisplay from "../InfoDisplay"

function Main() {
    const [view, setView] = useState<number>(2)

    return(
        <div className="w-[80%] h-fit flex gap-10">
            <div className="flex flex-col gap-10 w-[15rem]">
                <Navbar event={setView}></Navbar>
                <InfoDisplay></InfoDisplay> 
            </div>
            <div className="flex gap-4 pt-10"> 
                <View index={view}></View>
            </div>
        </div> 
    )
}

export default Main