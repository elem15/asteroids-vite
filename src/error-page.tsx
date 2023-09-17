import { Link } from 'react-router-dom';
import { NASA_ERROR } from './assets/constants/messages';

export default function ErrorPage() {
  return (
    <div className='content__shift' >
      <h2>
        {NASA_ERROR}
      </h2>
      <br />
      <h3>
        <Link to='/'>Перейти на главную</Link>
      </h3>
    </div>
  );
}
