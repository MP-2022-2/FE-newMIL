import { Link } from 'react-router-dom';
import { VerifiedGetApi } from '@/Utils/Api/VerifiedGetApi';
import { useState, useEffect } from 'react';
import { BoardContainer, Article, IsEmptyMsg } from './style';
import { ArticleTypes } from './types';

interface BoardProps {
  target: string;
}

export const Board = (props: BoardProps) => {
  const { target } = props;
  const [onSearchPost, setOnSearchPost] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(true);

  const getData = async () => {
    try {
      setLoading(true);
      setSuccess(false);
      await VerifiedGetApi(`board/${target}`).then((res) => setOnSearchPost(res.data.postDtoList));
    } catch (err) {
      setOnSearchPost([]);
    }
    setLoading(false);
    setSuccess(true);
  };

  useEffect(() => {
    getData();
  }, [target]);

  return (
    <BoardContainer>
      {isLoading && <>로딩중</>}
      {isSuccess && (
        <>
          {onSearchPost.length <= 0 && <IsEmptyMsg>불러올 수 있는 데이터가 없습니다</IsEmptyMsg>}
          {onSearchPost.map((el: ArticleTypes, idx: number) => (
            <Link key={idx} to={`${el.id}`}>
              <Article>
                <h2>{el.title}</h2>
                <p>{el.content}</p>
                <span>{el.createdAt}</span>
                <span>comments : {el.comment}</span>
                <span>like : {el.like}</span>
              </Article>
            </Link>
          ))}
        </>
      )}
    </BoardContainer>
  );
};

export default Board;
