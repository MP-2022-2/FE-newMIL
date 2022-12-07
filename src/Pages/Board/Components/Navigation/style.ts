import styled from 'styled-components';
import theme from '@/Styles/theme';

export const NaviContainer = styled.nav`
  display: block;
  width: 100%;
  text-align: center;
  align-self: center;

  ${theme.PC.h3};

  height: 3rem;
  line-height: 3rem;

  background: rgba(255, 255, 255, 0.24);

  transition: 0.2s ease-out;

  color: ${theme.color.disabled};
  border-bottom: 3px solid ${theme.color.disabled};
  backdrop-filter: blur(23.5px);

  &[title='selected'] {
    color: ${theme.color.black};
    border-bottom: 3px solid ${theme.color.ajouBlue};
  }

  &:hover {
    cursor: pointer;
  }
`;
