import { Link } from 'react-router-dom';
import instance from '@/Utils/Api/axios';
import { useState, useEffect } from 'react';
import GridSection from '@/Components/Section';
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
      await instance(`board/${target}?size=10&page=0`).then((res) =>
        setOnSearchPost(res.data.postDtoList),
      );
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
            <GridSection key={idx} col6>
              <Link to={`${el.id}`}>
                <Article>
                  <h2>{el.title}</h2>
                  <p>{el.content}</p>
                  <span>{el.createdAt}</span>
                  <span>comments : {el.comment}</span>
                  <span>like : {el.like}</span>
                </Article>
              </Link>
            </GridSection>
          ))}
        </>
      )}
    </BoardContainer>
  );
};

export default Board;
