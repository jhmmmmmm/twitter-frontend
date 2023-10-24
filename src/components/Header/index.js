import { CloseOutline } from 'antd-mobile-icons';
import { useAppContext } from '@utils/context';
import logo from '../../assets/x-twitter.svg';
import style from './index.module.scss';

const Header = () => {
  const [store] = useAppContext();
  const result = [];
  if (store.user) {
    return (
      <div className={style.backHeader}>
        <img src={store.user?.avatar_url} alt="" className={style.avatar} />
      </div>
    );
  }
  return (
    <div className={style.header}>
      {store.closeHeaderHandler
      && (<CloseOutline className={style.closeIcon} onClick={store.closeHeaderHandler} />)}
      <img src={logo} alt="twitter-logo" className={style.twitterLogo} />
      {result}
    </div>
  );
};

export default Header;
