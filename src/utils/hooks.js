import { generatePath, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
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

const MAXY = 100;

export const usePullToRefresh = () => {
  const y = useRef(0);
  const [tip, setTip] = useState();
  // document.documentElement.scrollTop === 0;
  // touchstart touchmove touchend
  // y shift
  // max shift
  useEffect(() => {
    window.ontouchstart = (e) => {
      if (document.documentElement.scrollTop === 0) {
        y.current = e.touches[0].pageY;
      }
    };

    window.ontouchmove = (e) => {
      if (document.documentElement.scrollTop === 0) {
        if (e.touches[0].pageY - y.current > MAXY) {
          setTip('release to refresh');
          return;
        }
        if (e.touches[0].pageY - y.current > 0) {
          setTip('pull to refreash');
        }
      }
    };
    return () => {
      window.ontouchstart = null;
      window.ontouchmove = null;
    };
  }, []);

  useEffect(() => {
    window.ontouchend = () => {
      if (document.documentElement.scrollTop === 0) {
        if (tip === 'release to refresh') {
          setTip('loading...');
          setTimeout(() => {
            setTip('refresh');
            setTimeout(() => {
              setTip('');
            }, 500);
          }, 1000);
          return;
        }
        setTip('');
      }
    };
    return () => {
      window.ontouchend = null;
    };
  }, [tip]);

  return tip;
};

const OFFSET = 50;
/**
 * 上拉加载
 */
export const useDownLoad = () => {
  const [loading, setLoading] = useState(false);
  // 判断是否触底
  // 1 document.documentElement.clientHeight
  // document.body.scrollHeight
  // document.documentElement.scrollTop
  // 2 触底条件 scrollTop + clientHeight = scrollHeight
  // 3 OFFSET 偏移量
  // scrollTop + clientHeight >= scrollHeight - OFFSET;
  useEffect(() => {
    window.onscroll = () => {
      if (loading) {
        return;
      }
      const { clientHeight, scrollTop } = document.documentElement;
      const { scrollHeight } = document.body;
      if (scrollTop + clientHeight >= scrollHeight - OFFSET) {
        setLoading(true);
      }
    };
    return () => {
      window.onscroll = null;
    };
  }, []);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        console.log('finish');
        setLoading(false);
      }, 2000);
    }
  }, [loading]);

  return loading;
};
