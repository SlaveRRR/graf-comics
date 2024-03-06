
import React,{FC} from 'react'
import cn from 'classnames'
import type { MixClass } from '../../../types/mixClass.type';
import styles from './index.module.scss'

type Stat = {
    name:string;
    count:number
}

type Props = {
    stats:Stat[]
} & MixClass

const Stats : FC<Props> = ({stats,mixClass}) => {

  return (
    <div className={cn(styles["stats"],...mixClass)}>
    {stats.map(({name,count},index) =><div key={index} className="stats__item">
        <p className={styles["stats__count"]}>{count}</p>
        <p className={styles["stats__name"]}>{name}</p>
    </div>)}
</div>
  )
}

export default Stats