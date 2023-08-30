import {useState} from 'react'
import ModalView from "../../layout/Modal/ModalView"
import {useCopySave} from "./hooks/useCopySave"
import {useResetGame} from "./hooks/useResetGame"
import { useSaveImport } from "./hooks/useSaveImport"
import Message from '../../layout/Message'

function SettingsView(){
    const resetGame = useResetGame()
    const [copySave, message] = useCopySave()
    const [saveImport, setSaveImport] = useState('')
    const changeSaveImport = useSaveImport()
    const [flag, setFlag] = useState(false)

    function handleExport(){
        copySave()
        setFlag(true)
        setTimeout(()=>{
            setFlag(false)
        }, 5000)
    }

    return(
        <ModalView>
            <section className="flex gap-10 flex-wrap">
                <button className="flex justify-center p-3 rounded-xl bg-green-700 w-[20rem]" onClick={() => resetGame()}>Reset Game</button>
                <button className="flex justify-center p-3 rounded-xl bg-green-700 w-[20rem]" onClick={() => handleExport()}>Export Save</button>
                <input className="w-[20rem] text-black pl-2 outline-green-700" type="text" onChange={(e) => setSaveImport(e.target.value)}/>
                <button className="flex justify-center p-3 rounded-xl bg-green-700 w-[20rem]" onClick={() => changeSaveImport(saveImport)}>Import Save</button>
                {flag ? <Message text={message} flag={true}></Message> : null}
            </section>
        </ModalView>
    )
}

export default SettingsView