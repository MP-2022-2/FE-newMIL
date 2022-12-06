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
  PostContentsContainer,
  PostComments,
} from './style';
import { IsEmptyMsg } from '../Components/BoardCard/style';
import { ArticleContentTypes } from './types';
import LikeButton from '../Components/LikeButton';

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
            {isPost.content ? (
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
                <PostContentsContainer>
                  <PostContents>{isPost.content}</PostContents>
                  <LikeButton score={isPost.like} />
                </PostContentsContainer>
                <PostComments>댓글입니다</PostComments>
              </>
            ) : (
              <IsEmptyMsg>불러올 수 있는 데이터가 없습니다</IsEmptyMsg>
            )}
          </>
        )}
      </PostContainer>
    </>
  );
};

export default Post;
