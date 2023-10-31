import msgSvg from '@assets/msg.svg';
import cycleSvg from '@assets/cycle.svg';
import starSvg from '@assets/star.svg';
import likeRedSvg from '@assets/likeRed.svg';
import upSvg from '@assets/up.svg';
import { LinkOutline } from 'antd-mobile-icons';
import style from './index.module.scss';

export const BAR_KEYS = {
  STAR: 'star',
  MSG: 'msg',
  CYCLE: 'cycle',
  UP: 'up',
};

export const getBars = ({
  commentsCount,
  likesCount,
  nav,
  id,
  onlyStar,
  liked,
}) => {
  if (onlyStar) {
    return [{
      key: BAR_KEYS.STAR,
      icon: (
        <div>
          {!liked ? <img className={style.icon} src={starSvg} alt="" />
            : <img className={style.icon} src={likeRedSvg} alt="" />}
          {likesCount > 0 && <span className={style.count}>{likesCount}</span>}
        </div>),
    }];
  }
  return [{
    key: BAR_KEYS.MSG,
    icon: (
      <div onClick={() => nav(`/comment/${id}`)}>
        <img className={style.icon} src={msgSvg} alt="" />
        {commentsCount > 0 && <span className={style.count}>{commentsCount}</span>}
      </div>),
  },
  {
    key: BAR_KEYS.CYCLE,
    icon: <img className={style.icon} src={cycleSvg} alt="" />,
  },
  {
    key: BAR_KEYS.STAR,
    icon: (
      <div>
        {!liked ? <img className={style.icon} src={starSvg} alt="" />
          : <img className={style.icon} src={likeRedSvg} alt="" />}
        {likesCount > 0 && <span className={style.count}>{likesCount}</span>}
      </div>),
  },
  {
    key: BAR_KEYS.UP,
    icon: <img className={style.icon} src={upSvg} alt="" />,
  },
  ];
};

export const ACTION_KEYS = {
  STAR: 'star',
  COPY: 'copy',
  CANCEL: 'cancel',
};

export const ACTIONS = [
  {
    text:
  <div className={style.copyButton}>
    <LinkOutline style={{ marginRight: 10 }} />
    Copy link
  </div>,
    key: ACTION_KEYS.COPY,
  },
  { text: <div className={style.cancelButton}>Cancel link</div>, key: ACTION_KEYS.CANCEL },
];
export const OBJECT_KEYS = {
  TWEET: 'tweet',
  COMMENT: 'comment',
};
