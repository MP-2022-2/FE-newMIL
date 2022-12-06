import styled from 'styled-components';
import theme from '@/Styles/theme';
import { IsEmptyMsg } from '../Components/BoardCard/style';

export const PostContainer = styled.div`
  display: block;
  margin: 0 auto;
  margin-top: 3rem;
  max-width: ${theme.layout.maxWidth};
`;

// Post Header
export const PostHeader = styled.div`
  border-bottom: 1px solid ${theme.color.gray};
`;

export const PostHeaderCategory = styled.h3``;

export const PostHeaderInfo = styled.caption`
  margin: 2rem 0 1rem;
  display: flex;
  text-align: left;
`;

export const PostHeaderTitle = styled.h2``;

// Post Contents
export const PostContentsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30rem;
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${theme.color.gray};
`;

export const PostContents = styled.p``;

// Post Components
export const PostComments = styled.section`
  margin-top: 1rem;
`;
