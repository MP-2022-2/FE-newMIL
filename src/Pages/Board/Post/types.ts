import { ArticleTypes } from '../Components/BoardCard/types';

export interface CommentTypes extends ArticleTypes {
  commentDtoList: [
    {
      text: string;
      createdAt: string;
      nickName: string;
    },
  ];
}
