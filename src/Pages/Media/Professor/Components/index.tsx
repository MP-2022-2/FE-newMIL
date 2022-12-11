import { useState } from 'react';
import GridSection from '@/Components/Section';
import { ProfessorInfo } from '@/Utils/Constants/professor';
import { Link } from 'react-router-dom';
import { ProfessorContainer, ProfessorComponent, ProfileBox, Profile, ProfileText } from './style';

const Professor = () => (
  <ProfessorContainer>
    {ProfessorInfo.map((item) => (
      <GridSection key={item.professorName} col6>
        <ProfessorComponent>
          <Link
            to={`professorDetail/${item.professorId}`}
            state={{
              professorId: item.professorId,
              profile: item.profile,
              professorName: item.professorName,
              email: item.email,
              officeRoom: item.officeRoom,
              education: item.education,
              thesis: item.thesis,
              book: item.book,
              other: item.other,
              homePageUrl: item.homePageUrl,
            }}
          >
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
          </Link>
        </ProfessorComponent>
      </GridSection>
    ))}
  </ProfessorContainer>
);
export default Professor;
