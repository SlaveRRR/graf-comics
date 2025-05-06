import { FC } from 'react';
import { BookMarkMenu, Loader, Toast } from '../UI';

const UIContainer: FC = () => {
  return (
    <div className="ui-container">
      <Loader />
      <BookMarkMenu />
      <Toast />
    </div>
  );
};

export default UIContainer;
