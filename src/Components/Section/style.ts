import styled, { css } from 'styled-components';
import { GridSectionStyleProps } from './types';

export const SectionContainer = styled.section<GridSectionStyleProps>`
  ${({ theme }) => theme.common.flexCenter};

  ${(props) =>
    props.col2 &&
    css`
      max-width: ;
    `}
`;
