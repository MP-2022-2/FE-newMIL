import theme from '@/Styles/theme';

export const pixelToRem = (size: number) => `${size / 16}rem`;
export const calColumn = (size: number) =>
  `${theme.layout.column * size + theme.layout.gutter * (size - 1)}`;
