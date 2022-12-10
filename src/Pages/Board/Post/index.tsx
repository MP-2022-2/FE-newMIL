import Header from '@/Components/Header';
import instance from '@/Utils/Api/axios';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { Icon } from '@iconify/react';
import Button from '@/Components/Button';
import {
  PostContainer,
  PostHeader,
  PostHeaderCategory,
  PostHeaderTitle,
  PostHeaderInfo,
  PostHeaderDateInfo,
  PostHeaderCountInfo,
  PostContents,
  PostContentsContainer,
  PostComments,
  PostSubMenu,
  CommentElement,
  CommentArea,
  IsEmptyComment,
} from './style';
import { IsEmptyMsg } from '../Components/BoardCard/style';
import { CommentTypes } from './types';
import LikeButton from '../Components/LikeButton';
import InputComment from '../Components/InputComment';

export const Post = () => {
  const { boardPath, idx } = useParams();
  const [isPost, setIsPost] = useState([] as unknown as CommentTypes);
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(true);
  const [isLiked, setLiked] = useState(false);

  const convertCategory = (data: string | undefined) => {
    if (data === 'free') return '자유게시판';
    if (data === 'qna') return '질문게시판';
    if (data === 'graduate') return '졸업생게시판';
    if (data === 'student') return '재학생게시판';
    return '';
  };

  const getData = useCallback(async () => {
    try {
      setLoading(true);
      setSuccess(false);
      await instance(`board/${boardPath}/${idx}`).then((res) => {
        setIsPost(res.data.postDto);
        setLiked(res.data.isLikedPost);
      });
    } catch (err) {
      setIsPost([] as unknown as CommentTypes);
    }
    setLoading(false);
    setSuccess(true);
  }, [idx]);

  useEffect(() => {
    getData();
  }, [idx, getData]);

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
                    <PostHeaderDateInfo>
                      <span>{isPost.nickname}</span>
                      <div>
                        <span>{new Date(isPost.createdAt).toLocaleDateString()}</span>
                        <span>{new Date(isPost.createdAt).toTimeString().substring(0, 5)}</span>
                      </div>
                    </PostHeaderDateInfo>
                    <PostHeaderCountInfo>
                      <span>
                        <Icon
                          width="16"
                          height="16"
                          color="#005696"
                          icon="mdi:comment-text-multiple"
                        />
                        {isPost.comment}
                      </span>
                    </PostHeaderCountInfo>
                  </PostHeaderInfo>
                </PostHeader>
                <PostContentsContainer>
                  <PostContents dangerouslySetInnerHTML={{ __html: isPost.content }} />
                  <PostSubMenu>
                    <LikeButton score={isPost.like} status={isLiked} />
                  </PostSubMenu>
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
                              <caption>{new Date(item.createdAt).toLocaleDateString()}</caption>
                              <caption>
                                {new Date(item.createdAt).toTimeString().substring(0, 5)}
                              </caption>
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
