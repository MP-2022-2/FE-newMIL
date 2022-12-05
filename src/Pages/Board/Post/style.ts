import styled from 'styled-components';
import theme from '@/Styles/theme';

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
export const PostContents = styled.section`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${theme.color.gray};

  p {
    margin-bottom: 16rem;
  }
`;

// Post Components
export const PostComments = styled.section`
  margin-top: 1rem;
`;
