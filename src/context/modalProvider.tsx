'use client';
import { Modal } from '@/components/UI';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface Context {
  isOpen: boolean;
  content: React.ReactNode | null;
  openModal: (content: React.ReactNode) => void;
  closeModal: () => void;
}

const ModalContext = createContext<Context>({} as Context);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ReactNode>(null);

  const openModal = (content: React.ReactNode) => {
    setContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setContent(null);
  };

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }, [isOpen]);

  return (
    <ModalContext.Provider value={{ isOpen, content, openModal, closeModal }}>
      {children}
      {isOpen && ReactDOM.createPortal(<Modal />, document.body)}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within ModalProvider');
  return context;
};
