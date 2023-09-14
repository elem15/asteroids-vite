import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <div className='list__title'>
        Vite APP
      </div>
      <div>
        <Link to='/root'>Root</Link>
      </div>
    </div>
  );
}

export default App;
