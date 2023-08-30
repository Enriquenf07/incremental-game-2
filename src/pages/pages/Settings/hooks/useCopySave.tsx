import useStore from "../../../../store/useStore"


export function useCopySave(): [() => void, string]{
    const saveEncoded = useStore(state => state.storageEncoded)
    const copySave = () => {
        navigator.clipboard.writeText(saveEncoded)
    }
    const message = 'Saved in clipboard'
    return [copySave, message]
}

