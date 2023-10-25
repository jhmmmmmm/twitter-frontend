import { useLocation, useNavigate } from 'react-router-dom';
import { getMenuByKey, getMenuByLink } from './constants';

export const useCurMenu = () => {
  const lo = useLocation();
  const it = getMenuByLink(lo.pathname);
  return it;
};

export const useGoTo = () => {
  const navigate = useNavigate();
  return (key) => {
    const it = getMenuByKey(key);
    if (!it) return navigate('/');
    return navigate(it.link);
  };
};
