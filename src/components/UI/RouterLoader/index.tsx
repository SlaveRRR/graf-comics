

import React, {FC} from 'react'
import cn from 'classnames'
import styles from './index.module.scss'

const RouterLoader : FC = () => {
    
    
  return (
    <div className={cn(styles["loader"],styles["loader--active"])}>
        <h2 className={styles['loader__text']}>Секундочку...</h2>
        <div className={styles["circles"]}>
            <span className={styles['circles__item']}></span>
            <span className={styles['circles__item']}></span>
            <span className={styles['circles__item']}></span>
        </div>
    </div>
  )
}

export default RouterLoader