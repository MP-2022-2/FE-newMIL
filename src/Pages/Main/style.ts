import styled from 'styled-components';
import theme from '@/Styles/theme';

export const MainContainer = styled.section`
  ${theme.common.flexCenterColumn};
  text-align: center;
`;

export const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  color: white;
`;

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 35rem;
  width: 100%;
  background-color: ${theme.color.ajouBlue};
`;

export const BannerBackground = styled.div`
  position: absolute;
  opacity: 0.25;
  background-image: url('/pictures/main/landscape.png');
  height: 35rem;
  width: 100%;
`;

export const BannerAnimation = styled.div`
  margin: 0 auto;
`;

export const SubMenuWrapper = styled.section`
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: ${theme.layout.maxWidth};

  h2 {
    padding: 5rem 0 2rem;
  }
`;

export const SubMenuContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  max-width: ${theme.layout.maxWidth};
`;

export const SubMenu = styled.div`
  display: block;
  height: 12rem;
  width: 100%;

  border-radius: 0.625rem;
  border: 1px solid ${theme.color.ajouSky};
  ${theme.common.shadowDefault};
  ${theme.common.pushAnimation};
`;

export const NoticeContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  max-width: ${theme.layout.maxWidth};

  margin: 3rem 0;
`;

export const Notice = styled.div`
  width: 100%;
  height: 10rem;
  border-radius: 0.625rem;
  border: 1px solid ${theme.color.ajouSky};
  ${theme.common.shadowDefault};
  ${theme.common.pushAnimation};
`;

export const NoticeWrapper = styled(SubMenuWrapper)`
  h2 {
    padding: 5rem 0 0 0;
  }
  margin-bottom: 10rem;
`;
