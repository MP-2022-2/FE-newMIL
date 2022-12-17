import { ArticleTypes } from '../Components/BoardCard/types';

export interface ArticlePostTypes extends ArticleTypes {
  commentDtoList: [
    {
      text: string;
      createdAt: string;
      nickName: string;
    },
  ];
}
