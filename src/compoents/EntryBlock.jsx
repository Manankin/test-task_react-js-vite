import '../styles/entryBlock.css';
import Header from './Header';

export default function EntryBlock() {
  return (
    <div className='entryBlock'>
      <Header />
      <h1 className="entryBlock__text">
        dive deep <br /> in to the <br /> future
      </h1>
      <div className="entryBlock__loading loading">
        <div className="loading__logo"></div>
        <div className="loading__progress-bar"></div>
      </div>
    </div>
  )
}