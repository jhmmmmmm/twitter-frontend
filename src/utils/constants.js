import homeSvg from '@assets/home.svg';
import messageSvg from '@assets/message.svg';
import tipSvg from '@assets/tip.svg';
import searchSvg from '@assets/search.svg';

import style from '../common.module.scss';

export const menus = [
  {
    key: 'Home',
    icon: <img className={style.icon} src={homeSvg} alt="" />,
    title: 'Homepage',
    link: '/tweets',
  },
  {
    key: 'Search',
    icon: <img className={style.icon} src={searchSvg} alt="" />,
    link: '/search',
  },
  {
    key: 'Tip',
    icon: <img className={style.icon} src={tipSvg} alt="" />,
    title: 'Notice',
    link: '/tip',
  },
  {
    key: 'Message',
    icon: <img className={style.icon} src={messageSvg} alt="" />,
    title: 'Message',
    link: '/message',
  },
];

export const getMenuByKey = (key) => menus.find((item) => item.key === key);

export const getMenuByLink = (link) => menus.find((item) => item.link === link);
