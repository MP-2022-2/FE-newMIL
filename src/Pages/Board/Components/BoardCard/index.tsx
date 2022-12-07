import { Link } from 'react-router-dom';
import instance from '@/Utils/Api/axios';
import { useState, useEffect } from 'react';
import GridSection from '@/Components/Section';
import { Icon } from '@iconify/react';
import { BoardContainer, Article, IsEmptyMsg, ArticleInfo } from './style';
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
                  <p dangerouslySetInnerHTML={{ __html: el.content }} />
                  <span>{el.createdAt.substring(0, 10)}</span>
                  <ArticleInfo>
                    <span>
                      <Icon
                        width="16"
                        height="16"
                        color="#005696"
                        icon="mdi:comment-text-multiple"
                      />
                      {el.comment}
                    </span>
                    <span>
                      <Icon width="16" height="16" color="#e6b71e" icon="icon-park-solid:like" />
                      {el.like}
                    </span>
                  </ArticleInfo>
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
