import { Link } from 'react-router-dom';
import { NASA_ERROR } from './assets/constants/messages';

export default function ErrorPage() {
  return (
    <div className='error__message'>
      <h2 >
        {NASA_ERROR}
      </h2>
      <br />
      <h3>
        <Link to='/' className='error__home-link'>Перейти на главную</Link>
      </h3>
    </div>
  );
}
