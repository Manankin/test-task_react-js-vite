import './styles/App.scss'
import { useEffect } from 'react'
import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import getData from './features/getData'
import Main from './components/Main'
import NotFoundPage from './components/AboutRocket'
import AboutRocket from './components/AboutRocket'

export default function App() {
  const [response, setResponse] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    getData().then(data => {
      setResponse(data);
      setIsLoaded(true);
    });
  }, []);

  console.log(response);

  return (
    <div className='page'>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/about' element={<NotFoundPage />} />
        <Route path='/qa' element={<NotFoundPage />} />
        <Route path='/contact' element={<NotFoundPage />} />
        <Route path='/rocket-info' element={<AboutRocket />} />


        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}
