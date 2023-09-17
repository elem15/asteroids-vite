import { ASTEROIDS_PAGE_URL } from '../../assets/constants/urls';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}><Link to={ASTEROIDS_PAGE_URL}>ARMAGEDDON 2023</Link></h1>
      <div className={styles.header__content}>
        ООО “Команда им. Б. Уиллиса”. <br />
        Взрываем астероиды с 1998 года.</div>
    </header>
  );
}
