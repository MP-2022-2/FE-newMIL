import Header from '@/Components/Header';
import useAnimation from '@/Utils/Hooks/useAnimation';
import useScrollFade from '@/Utils/Hooks/useScrollFade';
import talkComputer from '@/assets/animation/talk-computer.json';
import GridSection from '@/Components/Section';
import {
  MainContainer,
  BannerText,
  BannerContainer,
  BannerAnimation,
  BannerBackground,
  SubMenuWrapper,
  SubMenuContainer,
  NoticeContainer,
  NoticeWrapper,
  SubMenu,
  Notice,
} from './style';

export default function MainPage() {
  const animationStudy = useAnimation(talkComputer, true, 20, 20);
  const FadeIn = useScrollFade();
  const FadeIn2 = useScrollFade('up', 1.5, 1);

  return (
    <>
      <Header />
      <MainContainer>
        <BannerContainer>
          <BannerBackground />
          <BannerAnimation {...animationStudy} />
          <BannerText>
            <h3 {...FadeIn}>우리 과만의 커넥팅 라이브러리</h3>
            <h1 {...FadeIn2}>언더바</h1>
          </BannerText>
        </BannerContainer>
        <SubMenuWrapper>
          <h2>우리들만의 발자취를 따라가 봐요</h2>
          <SubMenuContainer>
            <GridSection col4>
              <SubMenu>최신글</SubMenu>
            </GridSection>
            <GridSection col4>
              <SubMenu>인기글</SubMenu>
            </GridSection>
            <GridSection col4>
              <SubMenu>수강 현황</SubMenu>
            </GridSection>
          </SubMenuContainer>
        </SubMenuWrapper>
        <NoticeWrapper>
          <h2>공지사항</h2>
          <NoticeContainer>
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
    </>
  );
}
