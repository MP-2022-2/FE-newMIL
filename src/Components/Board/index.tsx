import { BoardContainer, Article } from './style';
import { ArticleTypes } from './types';

const ArticleContents: ArticleTypes[] = [
  {
    title: '타이틀',
    time: '2022-05-04',
    author: '송재한',
    like: 30,
    comments: 2,
  },
];

export const Board = () => (
  <BoardContainer>
    {ArticleContents.map((item) => (
      <Article key={item.title}>
        {item.title}
        {item.time}
      </Article>
    ))}
  </BoardContainer>
);

export default Board;
