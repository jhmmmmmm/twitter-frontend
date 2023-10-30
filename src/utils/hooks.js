import { generatePath, useLocation, useNavigate } from 'react-router-dom';
import { getMenuByKey, getMenuByLink, includeMenu } from './constants';

export const useCurMenu = () => {
  const lo = useLocation();
  const it = getMenuByLink(lo.pathname);
  return it || {};
};

export const useGoTo = () => {
  const navigate = useNavigate();

  return (key, params) => {
    if (!key) {
      return navigate(-1);
    }
    const it = getMenuByKey(key);
    if (!it) return navigate('/');
    const link = generatePath(it.link, params);
    return navigate(link);
  };
};

export const useIncludesMenu = () => {
  const lo = useLocation();
  const result = includeMenu(lo.pathname);
  return result;
};
