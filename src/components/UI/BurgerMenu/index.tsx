import React, { FC } from 'react';
import styles from './index.module.scss';
import cn from 'classnames';

type Props = {
    isActive: boolean,
    onClick(): void
}

const BurgerMenu: FC<Props> = ({ onClick, isActive }) => {

    return (
        <button className={styles['burger-btn']} onClick={() => onClick()} aria-label="open burger menu">
            <span className="visuallyhidden">burger menu button</span>
            <svg className={cn(styles['burger-container'],{
                
                [ styles['burger-container--active'] ] : isActive 
            }
                )} width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.444571" y="0.444632" width="19.5611" height="19.5611" rx="4.00114" stroke="#6448CE" strokeWidth="0.889141" />
                <path className={styles["burger-container__item"]} d="M5.84277 6.81689H14.1203" stroke="#6448CE" strokeWidth="0.889141" strokeLinecap="round" />
                <path className={styles["burger-container__item"]} d="M5.84277 10.2252H14.1203" stroke="#6448CE" strokeWidth="0.889141" strokeLinecap="round" />
                <path className={styles["burger-container__item"]} d="M5.84277 13.6333H14.1203" stroke="#6448CE" strokeWidth="0.889141" strokeLinecap="round" />
            </svg>
        </button>
    )
}

export default BurgerMenu