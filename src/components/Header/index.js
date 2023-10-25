import { CloseOutline } from 'antd-mobile-icons';
import { useAppContext } from '@utils/context';
import logo from '../../assets/x-twitter.svg';
import style from './index.module.scss';

const Header = () => {
  const [store] = useAppContext();
  const result = [];
  if (store.user) {
    result.push(
      <div className={style.backHeader}>
        <img src={store.user?.avatar_url} alt="" className={style.avatar} />
      </div>,
    );
    result.push(
      <span className={style.title}>
        {store.title}
      </span>,
    );
  }
  if (store.closeHeaderHandler) {
    result.push(<CloseOutline className={style.closeIcon} onClick={store.closeHeaderHandler} />);
    result.push(<img src={logo} alt="twitter-logo" className={style.twitterLogo} />);
  }
  return (
    <div className={style.header}>
      {result}
    </div>
  );
};

export default Header;
