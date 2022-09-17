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
  mobile: '425px',
  tablet: '786px',
  laptop: '1280px',
  desktop: '1920px',
};

const layout: {
  gutter: number;
  column: number;
  maxWidth: string;
  mobile: string;
  tablet: string;
  laptop: string;
  desktop: string;
} = {
  maxWidth: '90rem',
  gutter: 24,
  column: 98,
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};

const theme = {
  common,
  color,
  layout,
};

export default theme;
