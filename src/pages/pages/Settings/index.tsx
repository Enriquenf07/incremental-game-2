import {useState} from 'react'
import ModalView from "../../layout/Modal/ModalView"
import {useCopySave} from "./hooks/useCopySave"
import {useResetGame} from "./hooks/useResetGame"
import { useSaveImport } from "./hooks/useSaveImport"

function SettingsView(){
    const resetGame = useResetGame()
    const copySave = useCopySave()
    const [saveImport, setSaveImport] = useState('')
    const changeSaveImport = useSaveImport()

    return(
        <ModalView>
            <section className="flex gap-10 pl-52 pt-32 flex-wrap">
                <button className="flex justify-center p-3 rounded-xl bg-green-700 w-[20rem]" onClick={() => resetGame()}>Reset Game</button>
                <button className="flex justify-center p-3 rounded-xl bg-green-700 w-[20rem]" onClick={() => copySave()}>Export Save</button>
                <input className="w-[20rem] text-black pl-2 outline-green-700" type="text" onChange={(e) => setSaveImport(e.target.value)}/>
                <button className="flex justify-center p-3 rounded-xl bg-green-700 w-[20rem]" onClick={() => changeSaveImport(saveImport)}>Import Save</button>

            </section>
        </ModalView>
    )
}

export default SettingsView