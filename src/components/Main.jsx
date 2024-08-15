import { useDispatch, useSelector } from 'react-redux';
import '../styles/main.scss';
import About from './About';
import EntryBlock from './EntryBlock';
import Footer from './Footer';
import Info from './Info';
import Rockets from './Rockets';
import Team from './Team';
import { useEffect } from 'react';
import { fetchRockets } from '../store/action';

export default function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets())
  }, []);

  const {loading} = useSelector((state) => {
    return state.rockets
  })

  console.log('====================================');
  console.log(loading);
  console.log('====================================');

  return (
    <>
      <div className='main'>
        <EntryBlock></EntryBlock>
        <Rockets></Rockets>
        <Info></Info>
        <About></About>
        <Team></Team>
      </div>
      <Footer />
    </>
  )
}