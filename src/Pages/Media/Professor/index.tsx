import Header from '@/Components/Header';
import GridSection from '@/Components/Section';
import TitleComponent from '@/Components/Title';
import { ProfessorWrapper } from './style';

const ProfessorPage = () => (
  <ProfessorWrapper>
    <Header />
    <GridSection col12 center>
      <TitleComponent titleContent="교수님 소개" />
    </GridSection>
  </ProfessorWrapper>
);

export default ProfessorPage;
