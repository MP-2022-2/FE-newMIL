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
    title: '타이틀2',
    time: '2022-05-04',
    author: '송재한',
    content: '글 내용입니다. 글 내용2222',
    like: 30,
    comments: 2,
  },
  {
    title: '타이틀3',
    time: '2022-05-04',
    author: '송재한',
    content: '글 내용입니다. 글 내용2222',
    like: 30,
    comments: 2,
  },
];

export const Board = () => (
  <BoardContainer>
    <a href="https://velog.io/@syoo970/React-Router-Dom%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%B4%EC%84%9C-%EC%99%B8%EB%B6%80-%EB%A7%81%ED%81%AC%EB%A1%9C-redirect-%EC%8B%9C%ED%82%A4%EA%B8%B0V6">
      {ArticleContents.map((item) => (
        <Article key={item.title}>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
          <span>{item.time}</span>
          <span>comments : {item.comments}</span>
        </Article>
      ))}
    </a>
  </BoardContainer>
);

export default Board;
