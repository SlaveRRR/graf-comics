import { ArticleSkeleton, CardSkeleton } from './components';
import { SkeletonsProps } from './types';

export const Skeletons = ({ count = 4, type }: SkeletonsProps) => {
  const Component = type === 'article' ? ArticleSkeleton : CardSkeleton;

  return (
    <>
      {Array.from({ length: count }).map((el) => (
        <Component />
      ))}
    </>
  );
};
