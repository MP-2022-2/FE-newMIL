import GridSection from '@/Components/Section';
import Title from '@/Components/Title';
import CilNavigation from './Components/Navigation';
import { CilContainer, CilWrapper } from './style';

export default function CilPage() {
  return (
    <GridSection mobile hasHeader hasFooter col12 center marginSide alignColumn>
      <Title
        titleContent="CIL (Curriculum Industry Link)"
        subTitleContent="미디어학과 학년별 과목을 정리해보았습니다."
      />
      <CilNavigation />
      <CilWrapper>
        <GridSection div col4>
          안녕
        </GridSection>
        <CilContainer>
          <GridSection div col8>
            안녕
          </GridSection>
        </CilContainer>
      </CilWrapper>
    </GridSection>
  );
}
