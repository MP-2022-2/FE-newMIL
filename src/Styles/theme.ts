import { pixelToRem } from '@/Utils/Libs/layoutFunc';

const common = {
  flexCenter: `
    display: flex;
    justify-contents: center;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  `,
  h1: `
    font-size : ${pixelToRem(28)};
    font-weight : bold;
  `,
  h2: `
    font-size : ${pixelToRem(24)};
    font-weight : bold;
  `,
  h3: `
    font-size : ${pixelToRem(18)};
    font-weight : medium;
  `,
  h4: `
    font-size : ${pixelToRem(14)};
    font-weight : medium;
  `,
  caption: `
    font-size : ${pixelToRem(10)};
    font-weight : 300;
  `,
};

const color = {
  blue: '#4B89DC',
  lightblue: '#FCFDFF',
  black: '#333333',
  white: '#fefefe',
  darkBlue: '#0A2B52',
  ajouBlue: '#0066B3',
  ajouGold: '#BB8732',
  ajouSky: '#88B2DF',
  ajouYellow: '#F79433',
  ajouSilver: '#959B9D',
};

const size = {
  mobile: '786px',
  desktop: '787px',
};

const layout: {
  gutter: number;
  column: number;
  maxWidth: string;
  mobile: string;
  desktop: string;
} = {
  maxWidth: '90rem',
  gutter: 24,
  column: 98,
  mobile: `screen and (max-width: ${size.mobile})`,
  desktop: `screen and (min-width: ${size.desktop})`,
};

const theme = {
  common,
  color,
  layout,
};

export default theme;
