import Header from '@/Components/Header';
import { boardFreeFunc } from '@/Utils/Api/BoardApi';
import {
  PostContainer,
  PostHeader,
  PostHeaderCategory,
  PostHeaderTitle,
  PostHeaderInfo,
  PostContents,
  PostComments,
} from './style';

export const Post = () => (
  <>
    <Header />
    <PostContainer>
      <PostHeader>
        <PostHeaderCategory>카테고리</PostHeaderCategory>
        <PostHeaderTitle>게시판 제목</PostHeaderTitle>
        <PostHeaderInfo>
          2020-03-03
          <br />
          댓글 24 좋아요 6
        </PostHeaderInfo>
      </PostHeader>
      <PostContents>
        <p>내용입니다</p>
      </PostContents>
      <PostComments>댓글입니다</PostComments>
    </PostContainer>
  </>
);

export default Post;
