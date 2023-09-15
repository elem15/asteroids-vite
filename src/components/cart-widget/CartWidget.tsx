import { declOfNum } from '../../utils/deklOfNum';
import styles from './CartWidget.module.css';
import { CART_PAGE_URL } from '../../assets/constants/urls';
import { Link } from 'react-router-dom';

type Props = {
  loading: boolean;
  cartCounter: number;
};

export default function CartWidget({ loading, cartCounter }: Props) {

  return (
    <div className={styles.cart}>
      <div>
        <h4 className={styles.cart__title}>Корзина</h4>
        <div className={styles.cart__content}>{cartCounter} {declOfNum(cartCounter, ['астероид', 'астероида', 'астероидов'])}</div>
      </div>
      {cartCounter === 0 ?
        <div className={styles.cart__content}>Миссии не заказаны</div>
        : <Link to={CART_PAGE_URL}>
          <button className={styles.cart__button} disabled={loading}>
            Отправить
            {loading && <div className={styles.cart__preloader}>
              <img className="spinner" src="/img/Spinner.png" alt="spinner" width={16} height={16} />
            </div>}
          </button></Link>
      }
    </div>);
}
