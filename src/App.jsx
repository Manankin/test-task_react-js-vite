import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import { useEffect } from 'react'
import { useState } from 'react'
import getData from './features/getData'

function App() {
  const [response, setResponse] = useState(null)
  
  useEffect(() => {
    getData().then(data => setResponse(data));
  }, []);

  console.log(response);

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
      <p>This is my test task for Banxso company on React JS and Vite compiller</p>
    </>
  )
}

export default App
