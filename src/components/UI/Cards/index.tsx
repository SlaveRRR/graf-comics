

import React,{FC} from 'react'
import { Card } from '..'
import cn from 'classnames';
import styles from './index.module.scss'
type Props = {
    names:string[];
    mixClass:string[];
}

const Cards : FC<Props> = ({names,mixClass}) => {
  return (
    <div className={cn(styles["cards"],...mixClass)}>
       {names.map((v,i) => <Card key={`${v}${i}`} text={v} />)} 
    </div>
    
  )
}

export default Cards