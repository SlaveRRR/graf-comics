'use client';
import { BackLink } from '@/components/shared';
import { useModal } from '@/context/modalProvider';
import cn from 'classnames';
import { FC } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './index.module.scss';
import { ModalProps } from './types';

export const Modal: FC<ModalProps> = ({ className }) => {
  const { isOpen, closeModal, content } = useModal();

  return (
    <CSSTransition
      appear={true}
      timeout={1500}
      in={isOpen}
      unmountOnExit
      classNames={{
        ...styles,
      }}
    >
      <div onClick={closeModal} className={cn(styles['modal'], className)}>
        <div className={cn(styles['modal__container'], 'container')}>
          <div className={styles['modal__content']} onClick={(e) => e.stopPropagation()}>
            <BackLink mixClass={[styles['backLink']]} onClick={closeModal} />
            {content}
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};
