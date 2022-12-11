import { useParams, useLocation } from 'react-router-dom';
import Header from '@/Components/Header';
import GridSection from '@/Components/Section';
import { TitleComponent } from '@/Components/Title';
import { ProfessorType } from '@/@Types/professor';
import { PageWrapper, PageContainer } from './style';

const ProfessorDetailPage = () => {
  const { professorId } = useParams();
  const location = useLocation();
  const selectedProfessor = location.state as ProfessorType;

  return (
    <div>
      <PageWrapper>
        <Header />
        <PageContainer>
          <GridSection col12>
            <TitleComponent titleContent={`${selectedProfessor.professorName} 교수님`} />
          </GridSection>
        </PageContainer>
      </PageWrapper>
      <p>{professorId}</p>
    </div>
  );
};

export default ProfessorDetailPage;
