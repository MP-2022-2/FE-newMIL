import styled, { css } from 'styled-components';
import theme from '@/Styles/theme';

export const HeartIcon = styled.span<{ isLiked: boolean }>`
  width: 42px;
  height: 50px;
  margin: 0 10px;
  display: inline-block;
  transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
  -webkit-transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);

  &:hover {
    cursor: pointer;
    transform: scale3d(1.105, 1.105, 1);
    -webkit-transform: scale3d(1.105, 1.105, 1);
    transition: all 0.35s cubic-bezier(0, 1.27, 0.46, 1.65);
    -webkit-transition: all 0.35s cubic-bezier(0, 1.27, 0.46, 1.65);
  }

  &:active {
    cursor: pointer;
    transform: scale3d(0.9785, 0.9785, 1);
    -webkit-transform: scale3d(0.9785, 0.9785, 1);
    transition: all 0.35s cubic-bezier(0, 1.27, 0.46, 1.65);
    -webkit-transition: all 0.35s cubic-bezier(0, 1.27, 0.46, 1.65);
  }

  path {
    &:first-of-type {
      fill: ${theme.color.gray};
    }
    &:last-of-type {
      fill: #fff;
      transform-origin: 21px 25px;
      -webkit-transform-origin: 21px 25px;
      animation: hex-icon-heart-beat 1s linear infinite;
      -webkit-animation: hex-icon-heart-beat 1s linear infinite;
    }
  }

  ${(props) =>
    props.isLiked &&
    css`
      path {
        &:first-of-type {
          fill: #fff1c5;
        }
        &:last-of-type {
          fill: ${theme.color.ajouYellow};
        }
      }
    `}

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  @keyframes hex-icon-heart-beat {
    0% {
      transform: scale3d(1, 1, 1);
    }
    30% {
      transform: scale3d(0.875, 0.875, 1);
    }
    60% {
      transform: scale3d(1, 1, 1);
    }
  }

  @-webkit-keyframes hex-icon-heart-beat {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
    }
    30% {
      -webkit-transform: scale3d(0.875, 0.875, 1);
    }
    60% {
      -webkit-transform: scale3d(1, 1, 1);
    }
  }
`;

export const LikeButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: top;

  /* #box [class^='hex-icon'] */
`;

export const LikeButtonWrapper = styled.div`
  display: block;
  text-align: center;
`;

export const LikedScore = styled.h2<{ isLiked: boolean }>`
  padding-bottom: 0.5rem;
  color: ${theme.color.ajouSilver};

  ${(props) =>
    props.isLiked &&
    css`
      color: ${theme.color.black};
    `}
`;
