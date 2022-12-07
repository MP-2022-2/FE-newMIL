import Header from '@/Components/Header';
import instance from '@/Utils/Api/axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import {
  PostContainer,
  PostHeader,
  PostHeaderCategory,
  PostHeaderTitle,
  PostHeaderInfo,
  PostContents,
  PostContentsContainer,
  PostComments,
  CommentElement,
  CommentArea,
  IsEmptyComment,
} from './style';
import { IsEmptyMsg } from '../Components/BoardCard/style';
import { ArticleContentTypes } from './types';
import LikeButton from '../Components/LikeButton';
import InputComment from '../Components/InputComment';

export const Post = () => {
  const { boardPath, idx } = useParams();
  const [isPost, setIsPost] = useState([] as unknown as ArticleContentTypes);
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(true);

  const convertCategory = (data: string | undefined) => {
    if (data === 'free') return '자유게시판';
    if (data === 'qna') return '질문게시판';
    if (data === 'graduate') return '졸업생게시판';
    if (data === 'student') return '재학생게시판';
    return '';
  };

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
                  <PostHeaderCategory>{convertCategory(boardPath)}</PostHeaderCategory>
                  <PostHeaderTitle>{isPost.title}</PostHeaderTitle>
                  <PostHeaderInfo>
                    <div>{isPost.createdAt.substring(0, 10)}</div>
                    <div>
                      <span>
                        <Icon
                          width="16"
                          height="16"
                          color="#005696"
                          icon="mdi:comment-text-multiple"
                        />
                        {isPost.comment}
                      </span>
                      <span>
                        <Icon width="16" height="16" color="#e6b71e" icon="icon-park-solid:like" />
                        {isPost.like}
                      </span>
                    </div>
                  </PostHeaderInfo>
                </PostHeader>
                <PostContentsContainer>
                  <PostContents dangerouslySetInnerHTML={{ __html: isPost.content }} />
                  <LikeButton score={isPost.like} />
                </PostContentsContainer>
                <PostComments>
                  <CommentArea>
                    {isPost.commentDtoList.length ? (
                      <>
                        {isPost.commentDtoList.map((item, index) => (
                          <CommentElement key={index}>
                            <caption>{item.nickName}</caption>
                            <p>{item.text}</p>
                            <div>
                              <caption>{item.createdAt.substring(5, 10)}</caption>
                              <caption>{item.createdAt.substring(11, 16)}</caption>
                            </div>
                          </CommentElement>
                        ))}
                      </>
                    ) : (
                      <IsEmptyComment>아직 댓글이 작성되지 않았어요!</IsEmptyComment>
                    )}
                  </CommentArea>
                  <InputComment />
                </PostComments>
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
