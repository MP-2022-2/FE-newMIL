const size = {
  mobile: '425px',
  tablet: '786px',
  laptop: '1280px',
  desktop: '1920px',
};

const theme = {
  mainColor: '#4B89DC',
  black: '#333333',
  white: '#fefefe',
  ajouBlue: '#0066B3',
  ajouGold: '#BB8732',
  ajouSky: '#88B2DF',
  ajouYellow: '#F79433',
  ajouSilver: '#959B9D',
};

export const boundary = {
  maxWidth: '1440px',
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};

export default theme;