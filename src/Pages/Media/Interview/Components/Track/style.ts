import styled from 'styled-components';
import theme from '@/Styles/theme';

export const NaviContainer = styled.nav`
  display: block;
  width: 100%;
  text-align: center;
  align-self: center;
  margin-left: 0.5rem;
  margin-right: 0.5rem;

  ${theme.PC.body};

  height: 5rem;
  line-height: 5rem;

  background: rgba(255, 255, 255, 0.24);

  color: ${theme.color.disabled};
  border: 3px solid ${theme.color.disabled};
  backdrop-filter: blur(23.5px);

  &[title='selected'] {
    color: ${theme.color.black};
    border-bottom: 3px solid ${theme.color.black};
  }

  :hover {
    cursor: pointer;
  }
`;
