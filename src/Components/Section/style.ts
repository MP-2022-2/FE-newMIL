import styled, { css } from 'styled-components';
import { calColumnToRem } from '@/Utils/Libs/layoutFunc';
import { GridSectionStyleProps } from './types';

export const SectionContainer = styled.section<GridSectionStyleProps>`
  ${({ theme }) => theme.common.flexCenter};
  width: 100%;
  justify-content: space-between;
  max-width: ${calColumnToRem(1)};

  //align
  ${(props) =>
    props.right &&
    css`
      justify-content: right;
    `}

  ${(props) =>
    props.center &&
    css`
      margin: 0 auto;
    `}

  //column
  ${(props) =>
    props.col2 &&
    css`
      max-width: ${calColumnToRem(2)};
    `}
  ${(props) =>
    props.col3 &&
    css`
      max-width: ${calColumnToRem(3)};
    `}
    ${(props) =>
    props.col4 &&
    css`
      max-width: ${calColumnToRem(4)};
    `}
    ${(props) =>
    props.col5 &&
    css`
      max-width: ${calColumnToRem(5)};
    `}
    ${(props) =>
    props.col6 &&
    css`
      max-width: ${calColumnToRem(6)};
    `}
    ${(props) =>
    props.col12 &&
    css`
      max-width: ${calColumnToRem(12)};
    `}
    ${(props) =>
    props.col8 &&
    css`
      max-width: ${calColumnToRem(8)};
    `};

  //gap
  ${(props) =>
    props.gap8 &&
    css`
      gap: 0.5rem;
    `}
  ${(props) =>
    props.gap16 &&
    css`
      gap: 1rem;
    `};
  ${(props) =>
    props.gap20 &&
    css`
      gap: 1.25rem;
    `};
  ${(props) =>
    props.gap24 &&
    css`
      gap: 1.5rem;
    `};
  ${(props) =>
    props.gap28 &&
    css`
      gap: 1.75rem;
    `};
  ${(props) =>
    props.gap32 &&
    css`
      gap: 2rem;
    `};
`;
