import GridSection from '@/Components/Section';
import { ProfessorInfo } from '@/Utils/Constants/professor';
import { ProfessorContainer, ProfessorComponent, ProfileBox, Profile, ProfileText } from './style';

const Professor = () => (
  <ProfessorContainer>
    {ProfessorInfo.map((item) => (
      <GridSection key={item.professorName} col6>
        <ProfessorComponent>
          <a href={item.homePageUrl}>
            <GridSection col6>
              <GridSection col2>
                <ProfileBox>
                  <Profile src={item.profile} />
                </ProfileBox>
              </GridSection>
              <ProfileText>
                <h3>{item.professorName} 교수님</h3>
                <span>{item.email}</span>
              </ProfileText>
            </GridSection>
          </a>
        </ProfessorComponent>
      </GridSection>
    ))}
  </ProfessorContainer>
);

export default Professor;
