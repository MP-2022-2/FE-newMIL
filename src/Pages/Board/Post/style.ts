import styled from 'styled-components';
import theme from '@/Styles/theme';

export const PostContainer = styled.div`
  display: block;
  margin: 0 auto;
  margin-top: 3rem;
  padding-bottom: 3rem;
  max-width: ${theme.layout.maxWidth};
  color: ${theme.color.black};
`;

// Post Header
export const PostHeader = styled.div`
  border-bottom: 1px solid ${theme.color.gray};
`;

export const PostHeaderCategory = styled.h4`
  color: ${theme.color.ajouSilver};
  font-weight: 300;
`;

export const PostHeaderInfo = styled.caption`
  margin: 2rem 0 1rem;
  display: flex;
  text-align: left;
  gap: 0.625rem;
  justify-content: space-between;

  span {
    color: ${theme.color.black};
    font-weight: 500;
    font-size: 1rem;
    align-items: baseline;
    padding-right: 0.25rem;
  }
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
export const CommentArea = styled.section`
  border-bottom: 1px solid ${theme.color.gray};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CommentElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;

  caption {
    display: block;
    text-align: left;
    color: ${theme.color.ajouSky};
    font-weight: 600;
  }

  div {
    display: flex;
    gap: 0.25rem;

    caption {
      font-weight: 300;
      color: ${theme.color.ajouSilver};
    }
  }
`;

export const PostComments = styled.section`
  margin-top: 1.5rem;
`;

export const IsEmptyComment = styled.h4`
  text-align: center;
  color: ${theme.color.ajouSky};
  font-weight: 300;
`;
