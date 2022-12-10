import Header from '@/Components/Header';
import useAnimation from '@/Utils/Hooks/useAnimation';
import useScrollFade from '@/Utils/Hooks/useScrollFade';
import talkComputer from '@/assets/animation/talk-computer.json';
import GridSection from '@/Components/Section';
import Footer from '@/Components/Footer';
import { Link } from 'react-router-dom';
import {
  MainContainer,
  BannerText,
  BannerContainer,
  BannerAnimation,
  BannerBackground,
  SubMenuWrapper,
  SubMenuLinkWrapper,
  SubMenuLabel,
  SubMenuContainer,
  NoticeContainer,
  NoticeWrapper,
  Notice,
} from './style';
import SubMenuList from './Components/SubMenuList';

export default function MainPage() {
  const animationStudy = useAnimation(talkComputer, true, 20, 20);

  return (
    <>
      <Header />
      <MainContainer>
        <BannerContainer>
          <BannerBackground />
          <BannerAnimation {...animationStudy} />
          <BannerText>
            <h3 {...useScrollFade('up', 1.5, 0)}>우리 과만의 커넥팅 라이브러리</h3>
            <h1 {...useScrollFade('up', 1.5, 0.5)}>언더바</h1>
          </BannerText>
        </BannerContainer>
        <SubMenuWrapper>
          <SubMenuLabel {...useScrollFade('up', 1.5, 0.85)}>
            우리들만의 발자취를 따라가 봐요
          </SubMenuLabel>
          <SubMenuContainer {...useScrollFade('up', 1.5, 0)}>
            <GridSection col4>
              <SubMenuList title="최신글" />
            </GridSection>
            <GridSection col4>인기글</GridSection>
            <GridSection col4>
              <SubMenuLinkWrapper>
                <Link to="/mypage">수강 현황</Link>
              </SubMenuLinkWrapper>
            </GridSection>
          </SubMenuContainer>
        </SubMenuWrapper>
        <NoticeWrapper>
          <SubMenuLabel {...useScrollFade('up', 1.5, 0)}>공지사항</SubMenuLabel>
          <NoticeContainer {...useScrollFade('up', 1.5, 0)}>
            <GridSection col3>
              <Notice>공지사항</Notice>
            </GridSection>
            <GridSection col3>
              <Notice>공지사항</Notice>
            </GridSection>
            <GridSection col3>
              <Notice>공지사항</Notice>
            </GridSection>
            <GridSection col3>
              <Notice>공지사항</Notice>
            </GridSection>
          </NoticeContainer>
        </NoticeWrapper>
      </MainContainer>
      <Footer />
    </>
  );
}
