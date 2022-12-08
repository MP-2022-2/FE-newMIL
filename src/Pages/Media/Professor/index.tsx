import Header from '@/Components/Header';
import GridSection from '@/Components/Section';
import TitleComponent from '@/Components/Title';
import { PageWrapper, PageContainer } from './style';
import Professor from './Components';

const ProfessorPage = () => (
  <PageWrapper>
    <Header />
    <PageContainer>
      <GridSection col12>
        <TitleComponent titleContent="교수님 소개" />
      </GridSection>
      <Professor />
    </PageContainer>
  </PageWrapper>
);

export default ProfessorPage;
