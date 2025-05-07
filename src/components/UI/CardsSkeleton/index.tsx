import { Skeleton } from './components';
import { CardsSkeletonProps } from './types';

export const CardsSkeleton = ({ count = 4 }: CardsSkeletonProps) => {
  return (
    <>
      {Array.from({ length: count }).map((el) => (
        <Skeleton />
      ))}
    </>
  );
};
