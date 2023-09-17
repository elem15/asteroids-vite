import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <div className='list__title'>
        Vite APP
      </div>
      <div>
        <Link to='/root'>Root</Link>
        <br />
        <Link to='/contacts/123'>contacts</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
