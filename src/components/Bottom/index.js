import { TabBar } from 'antd-mobile';
import { useState } from 'react';
import homeSvg from '@assets/home.svg';
import messageSvg from '@assets/message.svg';
import tipSvg from '@assets/tip.svg';
import searchSvg from '@assets/search.svg';

import style from './index.module.scss';

const menus = [
  {
    key: 'Home',
    icon: <img className={style.icon} src={homeSvg} alt="" />,
    title: 'Homepage',
    link: 'tweets',
  },
  {
    key: 'Search',
    icon: <img className={style.icon} src={searchSvg} alt="" />,
    title: 'Search',
    link: '/',
  },
  {
    key: 'Tip',
    icon: <img className={style.icon} src={tipSvg} alt="" />,
    title: 'Notice',
    link: '/',
  },
  {
    key: 'Message',
    icon: <img className={style.icon} src={messageSvg} alt="" />,
    title: 'Message',
    link: '/',
  },
];

/**
* Bottom bar component
*/
const Bottom = () => {
  const [activeKey, setActiveKey] = useState();

  const onChangeTabItem = (key) => {
    setActiveKey(key);
  };

  return (
    <div className={style.container}>
      <TabBar activeKey={activeKey} onChange={onChangeTabItem}>
        {menus.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  );
};

export default Bottom;
