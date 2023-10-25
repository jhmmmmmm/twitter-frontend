import Bottom from '@components/Bottom';
import Header from '@components/Header';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAppContext } from '@utils/context';
import Cookies from 'js-cookie';
import { getUser } from '@services/login';
import { useEffect } from 'react';
import { Toast } from 'antd-mobile';
import style from './index.module.scss';

const App = () => {
  const [, setStore] = useAppContext();
  const nav = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const init = async () => {
      const userId = Cookies.get('userId');
      if (!userId) {
        Toast.show('Please login again');
        nav('/login');
        return;
      }
      const res = await getUser(userId);
      if (res.data) {
        setStore({
          user: res.data,
        });
        if (location.pathname === '/login') {
          nav('/tweets');
        }
        return;
      }
      nav('/login');
    };
    init();
  }, []);
  return (
    <div className={style.container}>
      <Header />
      <Outlet />
      <Bottom />
    </div>
  );
};

export default App;
