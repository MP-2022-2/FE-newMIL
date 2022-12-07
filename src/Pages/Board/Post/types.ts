import { ArticleTypes } from '../Components/BoardCard/types';

export interface ArticleContentTypes extends ArticleTypes {
  commentDtoList: [
    {
      text: string;
      createdAt: string;
      nickName: string;
    },
  ];
}
