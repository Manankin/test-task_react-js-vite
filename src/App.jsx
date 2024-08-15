import './styles/App.scss'
import { Routes, Route} from 'react-router-dom'
import Main from './components/Main'
import AboutRocket from './components/AboutRocket'
import NotFoundPage from './components/NotFoundPage'
// import { fetchRockets } from './store/action'

export default function App() {
  // const dispatch = useDispatch();

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
