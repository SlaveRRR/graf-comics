import { FC } from 'react';
import { BookMarkMenu, Loader, ModalAuth, Toast } from '../UI';

const UIContainer: FC = () => {
  return (
    <div className="ui-container">
      <Loader />
      <ModalAuth />
      <BookMarkMenu />
      <Toast />
    </div>
  );
};

export default UIContainer;
