'use client';
import { FC, useState } from 'react';
import { BackLink } from '../shared';
import CoAuthorshipComics from './coAuthorshipComics';
import styles from './index.module.scss';

const CoAuthorship: FC = () => {
  const select = [
    { name: 'Комиксы', component: <CoAuthorshipComics /> },
    { name: 'Мои комиксы', component: <div>ww</div> },
    { name: 'Новый комикс', component: <div>ww</div> },
  ];

  const [content, setContent] = useState(select[0]);

  function checkComp(val) {
    for (let x of select) {
      if (x.name === val) setContent(x);
      else continue;
    }
  }
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['authorship-nav']}>
          <BackLink />
          <select
            onChange={(ev) => {
              console.log(ev);
              checkComp(ev.target.value);
            }}
            name=""
            id=""
          >
            {select.map((opt) => (
              <option value={opt.name}>{opt.name}</option>
            ))}
          </select>
        </div>

        <div>{content.component}</div>
      </div>
    </>
  );
};
export default CoAuthorship;
