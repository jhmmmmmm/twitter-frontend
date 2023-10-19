import style from './index.module.css';

export default () => (
  <div className={style.birthdayInput}>
    <div className={style.birthdayTitle}>Birthday</div>
    <div className={style.birthdayPlaceholder}>Year/Month/Day</div>
  </div>
);
