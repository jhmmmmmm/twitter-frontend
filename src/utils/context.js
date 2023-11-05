import {
  createContext, useContext, useState, useEffect, useMemo,
} from 'react';
import PropTypes from 'prop-types';

const defaultStore = {
  closeHeaderHandler: null,
  user: null, // 设为null或其他默认值
};

export const AppContext = createContext();

export const CxtProvider = ({ children }) => {
  const [store, setStore] = useState(defaultStore);
  const update = (v) => {
    setStore((st) => ({
      ...st,
      ...v,
    }));
  };

  useEffect(() => {
    // 创建一个异步函数
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3333/user'); // 根据你的JSON server配置调整URL
        const data = await response.json();

        // 假设服务器返回的数据结构为 { data: yourUserData }
        setStore((prevState) => ({
          ...prevState, // 保持其他的store数据不变
          user: data.data[0], // 取第一个用户
        }));
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    // 调用这个异步函数
    fetchData();
  }, []); // 仅在组件挂载时运行

  const value = useMemo(() => ({
    store, update,
  }), [store]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

CxtProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAppContext = () => {
  const cxt = useContext(AppContext);

  return [cxt.store, cxt.update];
};
