import { Link } from 'react-router-dom';
import { BoardContainer, Article } from './style';
import { ArticleTypes } from './types';

const ArticleContents: ArticleTypes[] = [
  {
    title: '타이틀',
    time: '2022-05-04',
    author: '송재한',
    content: '글 내용입니다. 글 내용',
    like: 30,
    comments: 2,
  },
  {
    title: '타이틀',
    time: '2022-05-04',
    author: '송재한',
    content: '글 내용입니다. 글 내용',
    like: 30,
    comments: 2,
  },
];

export const Board = () => (
  <BoardContainer>
    {ArticleContents.map((item, index) => (
      <Link key={item.key} to={`${index}`}>
        <Article>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
          <span>{item.time}</span>
          <span>comments : {item.comments}</span>
          <span>like : {item.like}</span>
        </Article>
      </Link>
    ))}
  </BoardContainer>
);

export default Board;
