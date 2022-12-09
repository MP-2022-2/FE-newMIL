import { ArticleTypes } from '@/Pages/Board/Components/BoardCard/types';

export interface BoardListProps {
  label: string;
  onSearchData: string;
  isLoading: boolean;
}

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
