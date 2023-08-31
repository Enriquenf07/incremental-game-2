import {useGameLogic} from "./hooks/useGameLogic"
import Main from "./pages/layout/Main/Main"
import useStore from "./store/useStore"
import { useHotkeys } from 'react-hotkeys-hook'

function App() {

  useGameLogic()

  return (
      <div className="w-screen min-h-screen bg-zinc-900 text-white flex justify-center">
        <Main></Main>  
      </div>
  )
}

export default App
