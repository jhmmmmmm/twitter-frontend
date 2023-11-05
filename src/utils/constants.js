import { UnorderedListOutline, UserCircleOutline } from 'antd-mobile-icons';

import { matchPath } from 'react-router-dom';

export const menus = [
  {
    key: 'login',
    link: '/login',
    hideBottom: true,
  },
  {
    key: 'register',
    link: '/register',
    hideBottom: true,
  },
  {
    key: 'tweet',
    title: 'Tweet',
    link: '/tweet/:id',
    hideHeader: true,
  },
  {
    key: 'Home',
    icon: <UnorderedListOutline />,
    title: 'Homepage',
    link: '/',
    isMenu: true,
  },
  {
    key: 'Profile',
    title: 'Profile',
    icon: <UserCircleOutline />,
    link: '/my',
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
  {
    key: 'my',
    link: '/my',
    hideHeader: true,
  },
  {
    key: 'editUser',
    title: 'Edit personal information',
    link: '/editUser',
    hideHeader: true,
  },
];

export const getMenuByKey = (key) => menus.find((item) => item.key === key);

export const getMenuByLink = (link) => menus.find((item) => matchPath(item.link, link));

export const includeMenu = (link) => menus.some((item) => item.link === link);
