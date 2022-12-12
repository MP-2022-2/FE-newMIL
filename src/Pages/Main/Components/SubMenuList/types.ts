import { CommentTypes } from '@/Pages/Board/Post/types';

export interface SubMenuTypes extends CommentTypes {
  boardType: string;
}

export interface SubMenuListProps {
  title: string;
  hasData: CommentTypes[];
  showDate?: boolean;
  showLiked?: boolean;
}
