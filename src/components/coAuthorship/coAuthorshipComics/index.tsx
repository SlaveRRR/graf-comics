'use client';
import { FC, useState } from 'react';
import comics from './exComics.json';
import styles from './index.module.scss';
const CoAuthorshipComics: FC = () => {
  const [comicsData, setComicsData] = useState(comics);
  let comicsDataRender = comicsData;
  console.log(comicsData);
  return (
    <>
      <div className={styles['comics']}>
        {comicsDataRender.map((com) => (
          <div className={styles['comBox']}>
            <div className={styles['comBox_header']}>
              <div>
                <h3 className={styles['com_name']}>{com.name}</h3>
                <div className={styles['com_roles']}>
                  {com.roles.map((role) => (
                    <span>{role}</span>
                  ))}
                </div>
              </div>
              {com.favourite ? <button>Кнопка с 1 классом</button> : <button>Кнопка с 2 классом</button>}
            </div>
            <div className={styles['comGenres']}>
              {com.genres.map((genre) => (
                <span>{genre}</span>
              ))}
            </div>
            <div className={styles['comTags']}>
              {com.tags.map((tag) => (
                <span>#{tag}</span>
              ))}
            </div>
            <div className={styles['writed-div']}>
              <span className={styles['writed']}>{com.dateOfwriting}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default CoAuthorshipComics;
