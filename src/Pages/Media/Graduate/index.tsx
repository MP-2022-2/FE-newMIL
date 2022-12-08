import Header from '@/Components/Header';
import GridSection from '@/Components/Section';
import TitleComponent from '@/Components/Title';
import { PageWrapper, PageContainer } from './style';

const GraduatePage = () => (
  <PageWrapper>
    <Header />
    <PageContainer>
      <GridSection col12>
        <GridSection col7>
          <div>
            <TitleComponent titleContent="졸업요건" />
            <TitleComponent titleContent="졸업요건" />
          </div>
        </GridSection>
        <TitleComponent titleContent="졸업요건" />
      </GridSection>
    </PageContainer>
  </PageWrapper>
);

export default GraduatePage;
