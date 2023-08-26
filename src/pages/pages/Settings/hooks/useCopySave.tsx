import useStore from "../../../../store/useStore"

export function useCopySave(){
    const saveEncoded = useStore(state => state.storageEncoded)
    const copySave = () => {
        navigator.clipboard.writeText(saveEncoded)
    }
    return copySave
}

