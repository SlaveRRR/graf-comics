import React, { FC } from 'react';
import { BookMarkMenu, Loader, ModalAuth } from '../UI';

const UIContainer: FC = () => {
  return (
    <div className="ui-container">
      <Loader />
      <ModalAuth />
      <BookMarkMenu />
    </div>
  );
};

export default UIContainer;
