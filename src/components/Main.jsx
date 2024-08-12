import '../styles/main.scss';
import About from './About';
import EntryBlock from './EntryBlock';
import Info from './Info';
import Rockets from './Rockets';
import Team from './Team';

export default function Main() {
  return (
    <div className='main'>
      {/* It is main info block */}
      <EntryBlock></EntryBlock>
      <Rockets></Rockets>
      <Info></Info>
      <About></About>
      <Team></Team>
    </div>
  )
}