export interface ArticleTypes {
  msg?: string;
  status?: number;
  id: number;
  title: string;
  content: string;
  createdAt: string;
  nickname: string;
  like: number;
  comment: number;
}
export interface BoardProps {
  target: string;
}
