import Header from '@components/Header';
import ImageCard from '@components/ImageCard';
import Bar from '@components/Bar';
import moment from 'moment';
import { useState, useEffect } from 'react';

import { OBJECT_KEYS } from '@components/Bar/constants';
import CommentCard from '@components/CommentCard';
import style from './index.module.scss';

const tweet = {
  id: 1,
  user: {
    id: 2,
    username: 'EpikGaming',
    nickname: 'EpikGamingT3',
    avatar_url: 'https://img.shoufaw.com/wp-content/uploads/2020/10/aEjURn.jpg',
  },
  comments: [
    {
      id: 1,
      tweet_id: 1,
      user: {
        id: 1,
        username: 'admin',
        nickname: 'EpikGamingT3',
        avatar_url: 'https://img.shoufaw.com/wp-content/uploads/2020/10/aEjURn.jpg',
      },
      content: 'Test!',
      created_at: '2021-12-22T15:03:52.662052Z',
      likes_count: 10,
      has_liked: false,
    },
    {
      id: 2,
      tweet_id: 1,
      user: {
        id: 1,
        username: 'admin',
        nickname: 'EpikGamingT3',
        avatar_url: 'https://img.shoufaw.com/wp-content/uploads/2020/10/aEjURn.jpg',
      },
      content: 'Test!',
      created_at: '2021-12-22T15:03:52.662052Z',
      likes_count: 10,
      has_liked: false,
    },
  ],
  created_at: '2021-12-18T07:38:01.699129Z',
  content: 'Id values are not mutable. be ignored. Only a value set in a POST request will be respected, but only if not already taken.', // 该推文的文本内容
  likes: [],
  likes_count: 10,
  comments_count: 122,
  has_liked: false,
  photo_urls: ['https://mooc-drop.oss-cn-beijing.aliyuncs.com/20200607085521_Czt8N.gif',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZuKXKJeqzfVVrwwS6IZ0NfZUwaxMoXiJkeya7tUM04zl3BJtbbbx2rThPKxwpXeufwbc&usqp=CAU',
    'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2021/08/12/realtime/13315182.jpg',
    // 'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2021/08/12/realtime/13315182.jpg',
  ],
};

const Tweet = () => {
  const [data, setDate] = useState(tweet);
  useEffect(() => {
    setDate(tweet);
  }, []);
  return (
    <div className={style.container}>
      <Header />
      <div className={style.contentContainer}>
        <div className={style.header}>
          <img src={data.user.avatar_url} alt="" className={style.avatar} />
          <div className={style.right}>
            <div className={style.nickname}>
              {data.user.nickname}
            </div>
            <div className={style.username}>
              @
              {data.user.username}
            </div>
          </div>
        </div>
        <div className={style.content}>
          {data.content}
        </div>
        <div className={style.photo}>
          <ImageCard
            imgs={data.photo_urls}
            likesCount={data.likes_count}
            commentsCount={data.comments_count}
          />
        </div>

        <div className={style.time}>
          {moment(data.created_at).format('A h:m · YYYY-MM-DD')}
        &nbsp;· Twitter for iPhone
        </div>
        <div className={style.bar}>
          <Bar
            id={data.id}
            likesCount={data.likes_count}
            commentsCount={data.comments_count}
            type={OBJECT_KEYS.TWEET}
          />
        </div>
      </div>
      {data.comments.map((item) => (<CommentCard key={item.id} data={item} />))}
    </div>
  );
};

export default Tweet;
