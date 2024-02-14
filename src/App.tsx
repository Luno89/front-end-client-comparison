import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { atom, useAtom } from 'jotai'
import { useStore } from './store/useStore';

const countAtom = atom(0);

function App() {
  const [countFromAtom, setCountFromAtom] = useAtom(countAtom);
  const countFromStore = useStore((state) => state.count);
  const increaseCountFromStore = useStore((state) => state.increaseCount);
  const resetCountFromStore = useStore((state) => state.resetCount);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCountFromAtom((count) => count + 1)}>
          count from Atom is {countFromAtom}
        </button>
        <button onClick={() => increaseCountFromStore()}>
          count from Store is {countFromStore}
        </button>
        <button onClick={() => resetCountFromStore()}>
          Reset from Store
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
