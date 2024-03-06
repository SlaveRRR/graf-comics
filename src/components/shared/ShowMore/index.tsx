'use client';
import React,{FC, useState} from 'react'
import styles from './index.module.scss'
type Props = {
    content:any;
}

const ShowMore : FC<Props> = ({content}) => {
  
    const [isActive,setIsActive] = useState(false);



  return (
    <>
    {
        isActive ?  content.concat(<span onClick={() => setIsActive(false)} className={styles['dots']}>скрыть</span>) : <span onClick={() => setIsActive(true)} className={styles['dots']}>...</span>
    }

    </>
    
  )
}

export default ShowMore