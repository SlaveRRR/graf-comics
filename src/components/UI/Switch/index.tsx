'use client';
import React, { FC, useState } from 'react'
import cn from 'classnames'
import styles from './index.module.scss'
type Props = {
    checked: any;
    unchecked: any;
    mixClass?: string[];
}

const Switch: FC<Props> = ({ checked, unchecked, mixClass = [] }) => {
    const [isChecked,setIsChecked] = useState<boolean>(true)
    return (
        <button onClick={() => setIsChecked(prev => !prev)} type='button' role='switch' className={cn(styles['switch'], ...mixClass,{
            [styles['switch--checked']] : isChecked
        })}>
            <div className={styles['switch-handle']}></div>
            <span className={styles["switch-inner"]}>
                <span className={styles["switch-inner-checked"]}> {checked}</span>
                <span className={styles["switch-inner-unchecked"]}>{unchecked}</span>
            </span>
        </button>
    )
}

export default Switch