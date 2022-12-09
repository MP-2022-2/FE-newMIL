import Header from '@/Components/Header';
import GridSection from '@/Components/Section';
import TitleComponent from '@/Components/Title';
import GraduateNavi from './Components/Graduate';
import { PageWrapper, PageContainer } from './style';

const GraduatePage = () => (
  <PageWrapper>
    <Header />
    <PageContainer>
      <GridSection col12 wrap>
        <GridSection col9 wrap>
          <GraduateNavi />
        </GridSection>
        <GridSection col3>
          <TitleComponent titleContent="요람" />
        </GridSection>
      </GridSection>
    </PageContainer>
  </PageWrapper>
);

export default GraduatePage;
