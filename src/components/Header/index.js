import { CloseOutline } from 'antd-mobile-icons';
import logo from '../../assets/x-twitter.svg';
import style from './index.module.css';

export default () => (
  <div className={style.header}>
    <CloseOutline className={style.closeIcon} />
    <img src={logo} alt="twitter-logo" className={style.twitterLogo} />
  </div>
);
