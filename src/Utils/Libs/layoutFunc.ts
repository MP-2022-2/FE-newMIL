import theme from '@/Styles/theme';

// 픽셀(ex)을 rem으로 계산해주는 함수
export const pixelToRem = (size: number) => `${size / 16}rem`;

// 줄간격(LineHeight)을 폰트 크기에 따라 계산해주는 함수
export const calLineHeight = (size: number, height: number) => `${(size / 16) * height}rem`;

// Column 수에 따라 영역을 px로 나타내주는 함수
export const calColumn = (size: number) =>
  `${theme.layout.column * size + theme.layout.gutter * (size - 1)}`;

// Column 수에 따라 영역을 rem으로 나타내주는 함수
export const calColumnToRem = (size: number) => {
  let temp: string | number = calColumn(size);
  temp = Number(temp);
  return pixelToRem(temp);
};
