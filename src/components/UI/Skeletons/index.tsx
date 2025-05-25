import { ArticleSkeleton, CardSkeleton, SliderSkeleton } from './components';
import { SkeletonsProps } from './types';

const ComponentsMap = {
  article: ArticleSkeleton,
  card: CardSkeleton,
  slider: SliderSkeleton,
} as const;

export const Skeletons = ({ count = 4, type }: SkeletonsProps) => {
  const Component = ComponentsMap[type];

  return (
    <>
      {Array.from({ length: count }).map(() => (
        <Component />
      ))}
    </>
  );
};
