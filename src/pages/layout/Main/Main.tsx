import { useState } from "react"
import Navbar from "../Navbar"
import View from "../View"
import InfoDisplay from "../InfoDisplay"


function Main() {
    const [view, setView] = useState<number>(2)   

    return(
        <div className="w-[90%] lg:w-[60%] h-fit flex flex-col gap-6 pt-8 pb-10">
            <Navbar event={setView}></Navbar>
            <div className="flex gap-4 items-start flex-col"> 
                <InfoDisplay></InfoDisplay>
                <View index={view}></View>
            </div>
        </div> 
    )
}

export default Main