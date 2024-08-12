import './styles/App.scss'
import { useEffect } from 'react'
import { useState } from 'react'
import getData from './features/getData'
import Footer from './components/Footer'
import Main from './components/main'

export default function App() {
  const [response, setResponse] = useState(null)
  
  useEffect(() => {
    getData().then(data => setResponse(data));
  }, []);

  console.log(response);

  return (
    <div className='page'>
      <Main />
      <Footer />
    </div>
  )
}
