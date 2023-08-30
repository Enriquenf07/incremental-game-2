import useStore from "../../../../store/useStore";

export function useResetGame(){
    const resetEncoded = useStore(state => state.resetEncoded)
    const resetGame = () => {
        resetEncoded()
        window.location.reload()
    }

    return resetGame
}