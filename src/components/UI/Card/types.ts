export interface CardProps {
  text: string;
  mixClass?: string[];
  type?: string;
  onClick?: () => void;
  imageSrc?: string;
  isLiked?: boolean;
  comicsId?: string;
}
