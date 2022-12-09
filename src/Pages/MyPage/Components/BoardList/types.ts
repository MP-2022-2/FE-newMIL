import { ArticleTypes } from '@/Pages/Board/Components/BoardCard/types';

export interface CommentTypes {
  text: string;
  createAt: string;
  nickName: string;
  postId: string;
}

export interface BoardListTypes extends ArticleTypes, CommentTypes {
  id: number;
  boardType: string;
}

export interface BoardListProps {
  label: string;
  data: BoardListTypes[];
  isKindOf: string;
}
