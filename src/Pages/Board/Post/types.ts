export interface ArticleContentTypes {
  msg?: string;
  status?: number;
  id: number;
  title: string;
  content: string;
  createdAt: string;
  nickname: string;
  like: number;
  comment: number;
  commentDtoList: [
    {
      text: string;
      createdAt: string;
      nickName: string;
    },
  ];
}
