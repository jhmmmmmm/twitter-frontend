import { Popup, Toast } from 'antd-mobile';
import { UserOutline } from 'antd-mobile-icons';
import PropTypes from 'prop-types';

import { useAppContext } from '@utils/context';
import { useGoTo } from '@utils/hooks';
// import Avatar from '@components/Avatar';
import Cookies from 'js-cookie';
import style from './index.module.scss';

const MyPopup = ({
  visible,
  onClose,
}) => {
  const [store] = useAppContext();
  const go = useGoTo();
  const handleLogout = () => {
    Cookies.set('userId', '');
    Toast.show('Log out');
    window.location.reload();
  };
  const handleToMy = () => {
    onClose();
    go('my');
  };
  return (
    <Popup
      visible={visible}
      onMaskClick={onClose}
      position="left"
      bodyStyle={{ width: '60vw' }}
    >
      <div className={style.container}>
        <div className={style.title}>Account Info</div>
        {/* <Avatar avatarUrl={store.user.avatar_url} className={style.avatar} /> */}
        <div className={style.nickname}>
          {store.user?.nickname || 'not known'}
        </div>
        <div className={style.username}>
          @
          {store.user?.username}
        </div>
        <div className={style.follower}>
          <span className={style.number1}>100</span>
          Following
          <span className={style.number2}>200</span>
          Followers
        </div>
        <div className={style.listItem} onClick={handleToMy}>
          <UserOutline />
          <span className={style.info}>
            Personal
          </span>
        </div>
        <div className={style.footer} onClick={handleLogout}>
          Log out
        </div>
      </div>
    </Popup>
  );
};

MyPopup.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MyPopup;
