import AddArticle from '@/components/AddArticle';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

type Props = {};

const NewArticleImages: FC<Props> = ({}) => {
  const {} = useForm();
  return (
    <AddArticle>
      <form>
        <label htmlFor="title-article">Название</label>
        <input type="text" id="title-article" />
      </form>
    </AddArticle>
  );
};
export default NewArticleImages;
