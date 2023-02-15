import { Link } from 'react-router-dom';
import instance from '@/Utils/Stores/Api/axios';
import { useState, useEffect, useCallback } from 'react';
import GridSection from '@/Components/Section';
import { Icon } from '@iconify/react';
import { useInView } from 'react-intersection-observer';
import { BoardContainer, Article, IsEmptyMsg, ArticleInfo, LoadingContainer } from './style';
import { BoardProps, ArticleTypes } from './types';

export const Board = (props: BoardProps) => {
  const { target } = props;
  const [onFetchPost, setOnFetchPost] = useState([] as unknown as ArticleTypes[]);
  const [isLoading, setLoading] = useState(false);
  const [isPageCount, setPageCount] = useState(0);
  const [hasLastPage, setHasLastPage] = useState(false);

  const [ref, inView] = useInView();

  const getData = useCallback(async () => {
    try {
      setLoading(true);
      await instance(`board/${target}?size=10&page=${isPageCount}&sort=id,DESC`).then((res) => {
        if (isPageCount === 0) {
          res.data.postDtoList.length > 0
            ? setOnFetchPost(res.data.postDtoList)
            : setHasLastPage(true);
        } else {
          res.data.postDtoList.length > 0
            ? setOnFetchPost(onFetchPost.concat(res.data.postDtoList))
            : setHasLastPage(true);
        }
      });
    } catch (err) {
      setOnFetchPost([]);
    }
    setLoading(false);
  }, [isPageCount, target]);

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    setOnFetchPost([]);
    setPageCount(0);
  }, [target]);

  useEffect(() => {
    if (inView && !isLoading && !hasLastPage) {
      setPageCount((prevState) => prevState + 1);
    }
  }, [inView, isLoading]);

  return (
    <BoardContainer>
      {onFetchPost.map((el: ArticleTypes, idx: number) => (
        <GridSection key={idx} col6>
          <Link to={`${el.id}`}>
            <Article>
              <h2 ref={ref}>{el.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: el.content.replace(/<[^>]*>?/g, ' ') }} />
              <div>
                <span>{new Date(el.createdAt).toLocaleDateString()}</span>
                <span>{el.nickname}</span>
              </div>
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
      {onFetchPost.length <= 0 && <IsEmptyMsg>불러올 수 있는 데이터가 없습니다</IsEmptyMsg>}
      {isLoading && <LoadingContainer>로딩중</LoadingContainer>}
    </BoardContainer>
  );
};

export default Board;
