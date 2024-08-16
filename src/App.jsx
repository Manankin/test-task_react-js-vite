import './styles/App.scss'
import { Routes, Route} from 'react-router-dom'
import Main from './components/Main'
import AboutRocket from './components/AboutRocket'
import NotFoundPage from './components/NotFoundPage'
import { useDispatch } from 'react-redux'
import { fetchRockets } from './store/action'
import { useEffect } from 'react'

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets())
  }, []);

  return (
    <div className='page'>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/about' element={<NotFoundPage />} />
        <Route path='/qa' element={<NotFoundPage />} />
        <Route path='/contact' element={<NotFoundPage />} />
        <Route path='/rocket-info/:index' element={<AboutRocket />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}
