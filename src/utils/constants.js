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
    isMenu: true,
  },
  {
    key: 'Search',
    icon: <img className={style.icon} src={searchSvg} alt="" />,
    link: '/search',
    isMenu: true,
  },
  {
    key: 'Tip',
    icon: <img className={style.icon} src={tipSvg} alt="" />,
    title: 'Notice',
    link: '/tip',
    isMenu: true,
  },
  {
    key: 'Message',
    icon: <img className={style.icon} src={messageSvg} alt="" />,
    title: 'Message',
    link: '/message',
    isMenu: true,
  },
  {
    key: 'comment',
    title: 'Comment',
    link: '/comment',
    hideHeader: true,
  },
];

export const getMenuByKey = (key) => menus.find((item) => item.key === key);

export const getMenuByLink = (link) => menus.find((item) => link.indexOf(item.link) > -1);

export const includeMenu = (link) => menus.some((item) => item.link === link);
