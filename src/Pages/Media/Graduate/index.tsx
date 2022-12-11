import Header from '@/Components/Header';
import GridSection from '@/Components/Section';
import Graduate from './Components/Graduate';
import Yoram from './Components/Yoram';
import { PageWrapper, PageContainer } from './style';

const GraduatePage = () => (
  <PageWrapper>
    <Header />
    <PageContainer>
      <GridSection col12 wrap flexStart>
        <GridSection col9 wrap>
          <Graduate />
        </GridSection>
        <GridSection col3>
          <Yoram />
        </GridSection>
      </GridSection>
    </PageContainer>
  </PageWrapper>
);

export default GraduatePage;
