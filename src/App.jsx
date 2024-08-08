import './styles/App.css'
import { useEffect } from 'react'
import { useState } from 'react'
import getData from './features/getData'
import Footer from './compoents/Footer'
import Main from './compoents/main'

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
