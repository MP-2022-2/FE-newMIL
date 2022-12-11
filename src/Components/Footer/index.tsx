import { FooterContainer, FooterWrapper } from './style';
import GridSection from '../Section';

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <GridSection col12 alignColumn>
          <span>아주대학교 2022학년도 2학기 미디어프로젝트</span>
          <span>© 2022 Copyright by 언더바</span>
        </GridSection>
      </FooterContainer>
    </FooterWrapper>
  );
}
