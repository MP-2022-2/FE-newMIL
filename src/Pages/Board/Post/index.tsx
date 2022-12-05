import Header from '@/Components/Header';
import { useParams } from 'react-router-dom';
import { VerifiedGetApi } from '@/Utils/Api/VerifiedGetApi';
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
import { ArticleContentTypes } from './types';

export const Post = () => {
  const { boardPath, idx } = useParams();
  const [isPost, setIsPost] = useState<ArticleContentTypes>([] as any);

  const getData = () => {
    VerifiedGetApi(`board/${boardPath}/${idx}`).then((res) => setIsPost(res.data.postDto));
  };

  useEffect(() => {
    getData();
  }, [idx]);

  console.log(isPost);

  return (
    <>
      <Header />
      <PostContainer>
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
      </PostContainer>
    </>
  );
};

export default Post;
