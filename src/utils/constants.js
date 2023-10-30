import homeSvg from '@assets/home.svg';
import messageSvg from '@assets/message.svg';
import tipSvg from '@assets/tip.svg';
import searchSvg from '@assets/search.svg';

import { matchPath } from 'react-router-dom';
import style from '../common.module.scss';

export const menus = [
  {
    key: 'tweet',
    title: 'Tweet',
    link: '/tweet/:id',
    hideHeader: true,
  },
  {
    key: 'Home',
    icon: <img className={style.icon} src={homeSvg} alt="" />,
    title: 'Homepage',
    link: '/',
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
    link: '/comment/:id',
    hideHeader: true,
  },
  {
    key: 'createTweet',
    link: '/createTweet',
    hideHeader: true,
  },
];

export const getMenuByKey = (key) => menus.find((item) => item.key === key);

export const getMenuByLink = (link) => menus.find((item) => matchPath(item.link, link));

export const includeMenu = (link) => menus.some((item) => item.link === link);
