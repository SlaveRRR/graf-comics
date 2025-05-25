'use client';
import { Modal } from '@/components/UI';

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface Settings {
  bg?: boolean;
}
interface Context {
  isOpen: boolean;
  content: React.ReactNode | null;
  openModal: (content: React.ReactNode, settingsData?: Settings) => void;
  closeModal: () => void;
  settings: Settings;
  setSettings: Dispatch<SetStateAction<Settings>>;
}

const ModalContext = createContext<Context>({} as Context);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ReactNode>(null);

  const [settings, setSettings] = useState<Settings>({});

  const openModal = (content: React.ReactNode, settingsData?: Settings) => {
    setContent(content);
    setIsOpen(true);
    setSettings(settingsData);
  };

  const closeModal = () => {
    setIsOpen(false);
    setContent(null);
    setSettings({});
  };

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }, [isOpen]);

  return (
    <ModalContext.Provider value={{ isOpen, content, openModal, closeModal, setSettings, settings }}>
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
