import { pixelToRem, calLineHeight } from '@/Utils/Libs/layoutFunc';

const PC = {
  h1: `
    font-size : ${pixelToRem(32)};
    font-weight : bold;
    letter-spacing : -0.025rem;
    line-height : ${calLineHeight(32, 1.2)};
  `,
  h2: `
    font-size : ${pixelToRem(26)};
    font-weight : bold;
    letter-spacing : -0.025rem;
    line-height : ${calLineHeight(26, 1.44)};
  `,
  h3: `
    font-size : ${pixelToRem(20)};
    font-weight : 500;
    letter-spacing : -0.02rem;
    line-height : ${calLineHeight(20, 1.44)};
  `,
  h4: `
    font-size : ${pixelToRem(16)};
    font-weight : 500;
    letter-spacing : -0.02rem;
    line-height : ${calLineHeight(16, 1.6)};
    
  `,
  body: `
    font-size : ${pixelToRem(16)};
    font-weight : 400;
    letter-spacing : -0.02rem;
    line-height : ${calLineHeight(16, 1.6)};
  `,
  caption: `
    font-size : ${pixelToRem(13)};
    font-weight : 300;
    letter-spacing : -0.02rem;
    line-height : ${calLineHeight(13, 1.6)};
  `,
};

const Mobile = {
  h1: `
    font-size : ${pixelToRem(26)};
    font-weight : bold;
    letter-spacing : -0.025rem;
    line-height : ${calLineHeight(26, 1.2)};
  `,
  h2: `
    font-size : ${pixelToRem(22)};
    font-weight : bold;
    letter-spacing : -0.025rem;
    line-height : ${calLineHeight(22, 1.44)};
  `,
  h3: `
    font-size : ${pixelToRem(18)};
    font-weight : 500;
    letter-spacing : -0.02rem;
    line-height : ${calLineHeight(18, 1.44)};
  `,
  h4: `
    font-size : ${pixelToRem(14)};
    font-weight : 500;
    letter-spacing : -0.02rem;
    line-height : ${calLineHeight(14, 1.6)};
  `,
  body: `
    font-size : ${pixelToRem(14)};
    font-weight : 400;
    letter-spacing : -0.02rem;
    line-height : ${calLineHeight(14, 1.6)};
  `,
  caption: `
    font-size : ${pixelToRem(12)};
    font-weight : 300;
    letter-spacing : -0.02rem;
    line-height : ${calLineHeight(12, 1.6)};
  `,
};

const common = {
  shadowDefault: `
    -webkit-box-shadow: 1px 2.5px 11px -1px #dddddd;
    -moz-box-shadow: 1px 2.5px 11px -1px #dddddd;
    box-shadow: 1px 2.5px 11px -1px #dddddd;
  `,
  componentBox: `
    border-radius: 0.625rem;
    border: 1px solid #88B2DF;
    padding : 2rem;
    width : 100%;
  `,
  pushAnimation: `
    transition: 0.15s ease-in-out;
    &:hover {
      cursor: pointer;
      transform: scale(1.025);
    }
    &:active {
      transform: scale(0.965);
    }
  `,
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

  mobileLayout: `
    max-width: calc(100% - 2rem);
    flex-wrap: wrap;
    margin: 0rem auto;
  }`,
};

const color = {
  lightblue: '#B8D4EA',
  lightYellow: '#fff1c5',
  black: '#333333',
  white: '#fefefe',
  gray: '#dfdfdf',
  bad: '#FF3E55',
  darkBlue: '#0A2B52',
  ajouBlue: '#0066B3',
  ajouGold: '#BB8732',
  ajouSky: '#88B2DF',
  ajouYellow: '#F79433',
  ajouSilver: '#959B9D',
  disabled: '#dedede',
};

const size = {
  mobile: '786px',
  desktop: '787px',
  full: '1296px',
};

const Animation = {
  Btnhover: `
    
  `,
};

const layout: {
  gutter: number;
  column: number;
  maxWidth: string;
  mobile: string;
  desktop: string;
  full: string;
} = {
  maxWidth: '81rem',
  gutter: 24,
  column: 86,
  mobile: `screen and (max-width: ${size.mobile})`,
  desktop: `screen and (min-width: ${size.desktop})`,
  full: `screen and (min-width: ${size.full})`,
};

const theme = {
  common,
  color,
  layout,
  PC,
  Mobile,
  Animation,
};

export default theme;
