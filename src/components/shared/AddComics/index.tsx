import React, { FC } from 'react'
import BackLink from '../BackLink'
import cn from 'classnames'
import styles from './index.module.scss'

type Props = {
    children:React.ReactNode;
}

const AddComics : FC<Props> = ({children}) => {
  return (
    <div className={cn(styles["add-comics"],"container")}>
        <BackLink mixClass={[styles["add-comics__link"]]}/>
        <div className={styles["add-comics__content"]}>
            <h2 className={styles['add-comics__head']}>Добавить свой комикс</h2>
            {children}
        </div>
    </div>
  )
}
export default AddComics