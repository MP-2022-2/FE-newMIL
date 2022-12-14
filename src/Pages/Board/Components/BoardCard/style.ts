import styled from 'styled-components';
import theme from '@/Styles/theme';

export const Article = styled.article`
  display: flex;
  flex-direction: column;

  text-align: left;

  ${theme.common.shadowDefault}

  border: 1px solid ${theme.color.ajouSky};
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  transition: 0.2s ease-in-out;
  color: ${theme.color.black};

  h2 {
    padding-bottom: 1rem;
  }

  p {
    padding-bottom: 4rem;
  }

  span {
    color: ${theme.color.ajouSilver};

    + span {
      padding-left: 0.5rem;
    }
  }

  &:hover {
    cursor: pointer;
    border: 1px solid ${theme.color.ajouBlue};
  }

  &:active {
    transform: scale(0.965);
  }
`;

export const ArticleInfo = styled.div`
  display: flex;
  padding-top: 0.375rem;

  svg {
    padding-right: 0.125rem;
  }

  span {
    color: ${theme.color.black};
    font-weight: 500;
    font-size: 1rem;
    align-items: baseline;
  }
`;

export const BoardContainer = styled.section`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  align-self: center;
  justify-content: center;
  max-width: ${theme.layout.maxWidth};
  margin: 3rem auto;
  padding-bottom: 3rem;

  a {
    display: block;
    width: 100%;
  }

  @media ${theme.layout.full} {
    justify-content: space-between;
  }

  @media ${theme.layout.mobile} {
    ${theme.common.mobileLayout}
  }
`;

export const IsEmptyMsg = styled.h3`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media ${theme.layout.mobile} {
    top: 50%;
  }
`;

export const LoadingContainer = styled.div`
  display: block;
  width: 100%;
  text-align: center;
`;
