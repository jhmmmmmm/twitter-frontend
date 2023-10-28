import { useState } from 'react';
import PropTypes from 'prop-types';
import { TabBar } from 'antd-mobile';
import msgSvg from '@assets/msg.svg';
import cycleSvg from '@assets/cycle.svg';
import starSvg from '@assets/star.svg';
import upSvg from '@assets/up.svg';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import style from './index.module.scss';

const getBars = ({
  commentsCount,
  likesCount,
  nav,
  id,
}) => [
  {
    key: 'msg',
    icon: (
      <div onClick={() => nav(`/comment/${id}`)}>
        <img className={style.icon} src={msgSvg} alt="" />
        {commentsCount > 0 && <span className={style.count}>{commentsCount}</span>}
      </div>),
  },
  {
    key: 'cycle',
    icon: <img className={style.icon} src={cycleSvg} alt="" />,
  },
  {
    key: 'star',
    icon: (
      <div>
        <img className={style.icon} src={starSvg} alt="" />
        {likesCount > 0 && <span className={style.count}>{likesCount}</span>}
      </div>),
  },
  {
    key: 'up',
    icon: <img className={style.icon} src={upSvg} alt="" />,
  },
];

const Bar = ({
  isBottom,
  commentsCount,
  likesCount,
  id,
}) => {
  const [activeKey, setActiveKey] = useState();
  const nav = useNavigate();

  const onChangeTabItem = (key) => {
    setActiveKey(key);
  };

  return (
    <div className={classNames({
      [style.container]: !isBottom,
      [style.containerBottom]: isBottom,
    })}
    >
      <TabBar activeKey={activeKey} onChange={onChangeTabItem}>
        {getBars({
          commentsCount, likesCount, nav, id,
        }).map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  );
};

Bar.propTypes = {
  isBottom: PropTypes.bool,
  commentsCount: PropTypes.number.isRequired,
  likesCount: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

Bar.defaultProps = {
  isBottom: false,
};

export default Bar;
