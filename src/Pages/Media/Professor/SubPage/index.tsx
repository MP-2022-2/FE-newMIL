import { useParams, useLocation } from 'react-router-dom';
import Header from '@/Components/Header';
import GridSection from '@/Components/Section';
import { TitleComponent } from '@/Components/Title';
import { ProfessorType } from '@/@Types/professor';
import Button from '@/Components/Button';
import {
  PageWrapper,
  PageContainer,
  ProfessorDetailComponent,
  ProfessorSimpleComponent,
  ProfessorProfileContainer,
  ProfessorProfile,
  ProfessorSimpleInfoContainer,
  ProfessorDetailInfoContainer,
} from './style';

const ProfessorDetailPage = () => {
  const { professorId } = useParams();
  const location = useLocation();
  const selectedProfessor = location.state as ProfessorType;

  return (
    <div>
      <PageWrapper>
        <Header />
        <PageContainer>
          <GridSection col12 wrap>
            <TitleComponent titleContent={`${selectedProfessor.professorName} 교수님`} />
            <ProfessorDetailComponent>
              <ProfessorSimpleComponent>
                <GridSection col2>
                  <ProfessorProfileContainer>
                    <ProfessorProfile src={selectedProfessor.profile} />
                  </ProfessorProfileContainer>
                </GridSection>
                <ProfessorSimpleInfoContainer>
                  <p>{selectedProfessor.email}</p>
                  <p>{selectedProfessor.officeRoom}</p>
                  <p>{selectedProfessor.education}</p>
                </ProfessorSimpleInfoContainer>
              </ProfessorSimpleComponent>
              <ProfessorDetailInfoContainer>
                <h2>대표 논문</h2>
                {!!selectedProfessor.thesis &&
                  selectedProfessor.thesis.map((item) => (
                    <p key={item.thesisTitle}>
                      {!!item.thesisTitle && (
                        <>
                          {item.thesisTitle}, {item.thesisAuthor}, {item.thesisBook},
                          {item.thesisPublicationYear}
                        </>
                      )}
                    </p>
                  ))}
                <h2>저서</h2>
                {!!selectedProfessor.book &&
                  selectedProfessor.book.map((item) => (
                    <p key={item.bookTitle}>
                      {!!item.bookTitle && (
                        <>
                          {item.bookTitle}, {item.bookAuthor}, {item.bookWritingPage},
                          {item.bookPublicationYear}
                        </>
                      )}
                    </p>
                  ))}
                <h2>기타</h2>
                {!!selectedProfessor.other &&
                  selectedProfessor.other.map((item) => (
                    <p key={item.otherTitle}>
                      {!!item.otherTitle && (
                        <>
                          {item.otherType}, {item.otherTitle}, {item.otherApplicant},
                          {item.otherNumber}, {item.otherApplicationYear}
                        </>
                      )}
                    </p>
                  ))}
              </ProfessorDetailInfoContainer>
            </ProfessorDetailComponent>
          </GridSection>
        </PageContainer>
      </PageWrapper>
    </div>
  );
};

export default ProfessorDetailPage;
