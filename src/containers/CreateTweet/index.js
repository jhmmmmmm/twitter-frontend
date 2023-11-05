import { useState } from 'react';
import Header from '@components/Header';
import TButton from '@components/TButton';
import { useAppContext } from '@utils/context';
import { TextArea, Toast } from 'antd-mobile';
import ImageUpload from '@components/ImageUpload';
import ImagePreview from '@components/ImagePreview';
import { createTweet } from '@services/tweet';
import { useGoTo } from '@utils/hooks';
import style from './index.module.scss';

/**
*
*/
const CreateTweet = () => {
  const [content, setContent] = useState('');
  const [store] = useAppContext();
  const [imgs, setImgs] = useState([]);
  const go = useGoTo();

  const onClickCreate = () => {
    createTweet({
      content,
      files: Object.values(imgs),
    }).then((res) => {
      if (res.success) {
        Toast.show('Post successfully');
        go();
        return;
      }
      Toast.show('Post failed');
    });
  };

  const onChangeContent = (v) => {
    setContent(v);
  };

  const onChangeUpFile = (v) => {
    if (v && Object.keys(v).length < 5) {
      setImgs((oldV) => ({
        ...oldV,
        ...v,
      }));
      return;
    }
    Toast.show('Only four images');
  };

  const handleDelImg = (index) => {
    const key = Object.keys(imgs).find((item, idx) => idx === index);
    setImgs((item) => {
      const newItem = { ...item };
      delete newItem[key];
      return newItem;
    });
  };

  return (
    <div className={style.container}>
      <Header>
        <TButton
          disabled={content.length === 0 && Object.keys(imgs).length === 0}
          onClick={onClickCreate}
        >
          Tweet
        </TButton>
      </Header>
      <div className={style.content}>
        <div className={style.left}>
          <img className={style.avatar} src={store.user?.avatar_url} alt="" />
        </div>
        <div className={style.right}>
          <TextArea rows={5} value={content} onChange={onChangeContent} className={style.text} placeholder="Something new?" />
          <ImagePreview imgs={Object.values(imgs)} handleDelImg={handleDelImg} />
          <div className={style.button}>
            <ImageUpload onChange={onChangeUpFile} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTweet;
