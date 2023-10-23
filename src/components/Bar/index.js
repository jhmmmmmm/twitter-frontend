import { useState } from 'react';
import PropTypes from 'prop-types';
import { TabBar } from 'antd-mobile';
import msgSvg from '@assets/msg.svg';
import cycleSvg from '@assets/cycle.svg';
import starSvg from '@assets/star.svg';
import upSvg from '@assets/up.svg';
import style from './index.module.scss';

const getBars = ({
  commentsCount,
  likesCount,
}) => [
  {
    key: 'msg',
    icon: (
      <div>
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
  commentsCount, likesCount,
}) => {
  const [activeKey, setActiveKey] = useState();

  const onChangeTabItem = (key) => {
    setActiveKey(key);
  };

  return (
    <div className={style.container}>
      <TabBar activeKey={activeKey} onChange={onChangeTabItem}>
        {getBars({
          commentsCount, likesCount,
        }).map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  );
};

Bar.propTypes = {
  commentsCount: PropTypes.number.isRequired,
  likesCount: PropTypes.number.isRequired,
};

export default Bar;
