import styled, { css } from 'styled-components';

export const ButtonContainer = styled.h3<{ regular?: boolean }>`
  position: relative;
  display: block;
  text-align: center;

  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 0;

  a,
  span {
    position: relative;
    text-decoration: none;
    color: ${({ theme }) => theme.color.black};

    // 밑줄 이펙트
    ::before {
      content: '';
      height: 5px;
      width: 0;
      background-color: #fff;
      border-radius: 10px;
      transition: 0.3s;
      position: absolute;
      bottom: -0.5rem;
      left: 0;
    }

    :hover {
      color: ${({ theme }) => theme.color.ajouSky};
      transition: 0.2s;

      ::before {
        width: 100%;
        background-color: ${({ theme }) => theme.color.ajouYellow};
      }
    }

    // regular 적용시
    ${(props) =>
      props.regular &&
      css`
        font-weight: 300;

        ::before {
          height: 0px;
        }

        :hover {
          ::before {
            width: 0%;
          }
        }
      `}
  }
`;
