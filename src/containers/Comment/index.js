import { useState, useEffect } from 'react';
import { Steps, TextArea } from 'antd-mobile';
import moment from 'moment';
import { useAppContext } from '@utils/context';
import style from './index.module.scss';

const { Step } = Steps;

const defaultTweet = {
  id: 1,
  user: {
    id: 2,
    username: 'EpikGaming',
    nickname: 'EpikGamingT3',
    avatar_url: 'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2021/08/12/realtime/13315182.jpg',
  },
  comments: [
    {
      id: 1,
      tweet_id: 1,
      user: {
        id: 1,
        username: 'admin',
        nickname: null,
        avatar_url: null,
      },
      content: 'Test!',
      created_at: '2021-12-22T15:03:52.662052Z',
      likes_count: 0,
      has_liked: false,
    },
  ],
  created_at: '2021-12-18T07:38:01.699129Z',
  content: 'This is a test,This is a test,This is a testThis is a testThis is a testThis is a testThis is a testThis is a testThis is a testThis is a testThis is a test',
  likes: [],
  likes_count: 0,
  comments_count: 1,
  has_liked: false,
  photo_urls: [],
};

const Comment = () => {
  const [store] = useAppContext();
  const [data, setData] = useState(defaultTweet);
  useEffect(() => {
    setData(defaultTweet);
  }, []);
  return (
    <div className={style.container}>
      <Steps
        direction="vertical"
      >
        <Step
          icon={<img className={style.icon} src={data.user.avatar_url} alt="" />}
          title={(
            <div className={style.stepContent}>
              <div className={style.header}>
                <span className={style.nickname}>{data.user.nickname}</span>
                @
                <span className={style.username}>
                  {data.user.username}
                &nbsp;·&nbsp;
                  {moment(data.created_at).format('MM-DD')}
                </span>
              </div>
              <div className={style.content}>
                {data.content}
              </div>
              <div className={style.recommit}>
                Reply
                <span className={style.commitName}>
                  @
                  {data.user.username}
                </span>
              </div>
            </div>
          )}
        />
        <Step
          icon={
            <img className={style.icon} src={store.user?.avatar_url} alt="" />
          }
          title={(
            <div>
              <TextArea className={style.text} placeholder="Post your reply" />
            </div>
          )}
        />
      </Steps>
    </div>
  );
};

export default Comment;
