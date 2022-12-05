import Header from '@/Components/Header';
import instance from '@/Utils/Api/axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  PostContainer,
  PostHeader,
  PostHeaderCategory,
  PostHeaderTitle,
  PostHeaderInfo,
  PostContents,
  PostComments,
} from './style';
import { IsEmptyMsg } from '../Components/BoardCard/style';
import { ArticleContentTypes } from './types';

export const Post = () => {
  const { boardPath, idx } = useParams();
  const [isPost, setIsPost] = useState([] as unknown as ArticleContentTypes);
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(true);

  const getData = async () => {
    try {
      setLoading(true);
      setSuccess(false);
      await instance(`board/${boardPath}/${idx}`).then((res) => setIsPost(res.data.postDto));
    } catch (err) {
      setIsPost([] as unknown as ArticleContentTypes);
    }
    setLoading(false);
    setSuccess(true);
  };

  useEffect(() => {
    getData();
  }, [idx]);

  return (
    <>
      <Header />
      <PostContainer>
        {isLoading && <>로딩중</>}
        {isSuccess && (
          <>
            {isPost.content && (
              <>
                <PostHeader>
                  <PostHeaderCategory>{boardPath}</PostHeaderCategory>
                  <PostHeaderTitle>{isPost.title}</PostHeaderTitle>
                  <PostHeaderInfo>
                    {isPost.createdAt}
                    {isPost.comment}
                    {isPost.like}
                  </PostHeaderInfo>
                </PostHeader>
                <PostContents>{isPost.content}</PostContents>
                <PostComments>댓글입니다</PostComments>
              </>
            )}
            {!isPost.content && <IsEmptyMsg>불러올 수 있는 데이터가 없습니다</IsEmptyMsg>}
          </>
        )}
      </PostContainer>
    </>
  );
};

export default Post;
