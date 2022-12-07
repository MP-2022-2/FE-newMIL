import styled from 'styled-components';
import theme from '@/Styles/theme';

export const VideoWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 3rem auto;
  max-width: ${theme.layout.maxWidth};
`;

export const VideoContainer = styled.article`
  display: flex;
  flex-direction: column;

  text-align: right;

  width: calc(50% - 0.75rem);
  height: 244px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border: 1px solid #232323;
  background-color: #ededed;
  margin-bottom: 0.75rem;
  border-radius: 10px;

  object-fit: cover;
  p {
    padding-top: 1.5rem;
    padding-right: 1.5rem;
  }

  h2 {
    padding-right: 1.5rem;
    padding-bottom: 7rem;
  }
  span {
    padding-right: 1.5rem;
  }
`;

export const VideoThumbnail = styled.img`
  //  left: 30%;
  //  top: 30%;
  //  transform: translate(-30%, -30%);
  width: 26rem;
  height: 15.25rem;
  object-fit: cover;
`;

export const VideoBox = styled.div`
  width: 100%;
  height: 15.25rem;
  border-radius: 10px 0px 0px 10px;
  overflow: hidden;
  border-width: 10px solid;
`;
