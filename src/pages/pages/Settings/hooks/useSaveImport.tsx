import useStore from "../../../../store/useStore"

export function useSaveImport(){
    const setEncoded = useStore(state => state.setEncoded)
    const saveImport = (save: string) => {
        const regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/
        if (save == ''){
            return 
        }
        if (!regex.test(save)){
            return
        }
        setEncoded(save)
        window.location.reload()
    }

    return saveImport
}