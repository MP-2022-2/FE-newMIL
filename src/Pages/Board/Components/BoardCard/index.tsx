import { Link } from 'react-router-dom';
import instance from '@/Utils/Api/axios';
import { useState, useEffect, useCallback } from 'react';
import GridSection from '@/Components/Section';
import { Icon } from '@iconify/react';
import { useInView } from 'react-intersection-observer';
import { BoardContainer, Article, IsEmptyMsg, ArticleInfo } from './style';
import { BoardProps, ArticleTypes } from './types';

export const Board = (props: BoardProps) => {
  const { target } = props;
  const [onSearchPost, setOnSearchPost] = useState([] as unknown as ArticleTypes[]);
  const [isLoading, setLoading] = useState(false);
  const [isPageCount, setPageCount] = useState(0);

  const [ref, inView] = useInView();

  const getData = useCallback(async () => {
    try {
      setLoading(true);
      await instance(`board/${target}?size=2&page=${isPageCount}`).then((res) =>
        setOnSearchPost(onSearchPost.concat(res.data.postDtoList)),
      );
    } catch (err) {
      setOnSearchPost([]);
    }
    setLoading(false);
  }, [isPageCount]);

  useEffect(() => {
    getData();
  }, [target, getData]);

  useEffect(() => {
    if (inView && !isLoading) {
      setPageCount((prevState) => prevState + 1);
    }
  }, [inView, isLoading]);

  return (
    <BoardContainer>
      {onSearchPost.length <= 0 && <IsEmptyMsg>불러올 수 있는 데이터가 없습니다</IsEmptyMsg>}
      {onSearchPost.map((el: ArticleTypes, idx: number) => (
        <GridSection key={idx} col6>
          <Link to={`${el.id}`}>
            <Article ref={ref}>
              <h2>{el.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: el.content.replace(/<[^>]*>?/g, '') }} />
              <span>{el.createdAt.substring(0, 10)}</span>
              <ArticleInfo>
                <span>
                  <Icon width="16" height="16" color="#005696" icon="mdi:comment-text-multiple" />
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
      {isLoading && <>로딩중</>}
    </BoardContainer>
  );
};

export default Board;
