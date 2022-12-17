import { ArticlePostTypes } from '@/Pages/Board/Post/types';

export interface SubMenuTypes extends ArticlePostTypes {
  boardType: string;
}

export interface SubMenuListProps {
  title: string;
  hasData: ArticlePostTypes[];
  showDate?: boolean;
  showLiked?: boolean;
}
