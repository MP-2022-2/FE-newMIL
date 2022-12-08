import styled from 'styled-components';
import theme from '@/Styles/theme';

export const Label = styled.h3`
  text-align: left;
`;

export const MyPageWrapper = styled.section``;
export const MyPageContainer = styled.div`
  width: 90%;
  max-width: ${theme.layout.maxWidth};
  margin: 0 auto;

  @media ${theme.layout.mobile} {
    ${theme.common.mobileLayout};
  }
`;

// Profile
export const ProfileContainer = styled.section`
  border-bottom: 1px solid ${theme.color.gray};
  padding: 2rem 0;
  margin-top: 2rem;
  border-radius: 0.625rem;
  border: 1px solid ${theme.color.ajouSky};
  ${theme.common.shadowDefault}
`;

export const Profile = styled.div``;

export const ProfileInfoContainer = styled.div`
  flex-direction: row;
  padding-left: 4rem;
`;

// Profile Info

export const Span = styled.span`
  display: flex;
  align-items: baseline;
`;

export const InfoNickName = styled.h4`
  padding-left: 0.5rem;
  font-weight: 300;
  color: ${theme.color.ajouSilver};
`;

export const InfoName = styled.h2``;

export const InfoRole = styled.caption`
  color: ${theme.color.ajouSky};
`;

export const InfoStudentId = styled.p`
  color: ${theme.color.ajouSilver};
  font-size: 0.875rem;
`;

// Subject
export const SubjectWrapper = styled.section`
  padding: 2rem 0;
`;

export const SubjectContainer = styled.section`
  border-radius: 0.625rem;
  display: flex;
  padding: 1rem 0;
  width: 100%;
  justify-content: space-between;

  @media ${theme.layout.mobile} {
    flex-wrap: wrap;
  }
`;

export const TrackContainer = styled.div`
  width: 100%;
  ${theme.common.shadowDefault}
  padding : 1rem;
  border-radius: 0.625rem;
`;

// Board
export const BoardAdministrationWrapper = styled.section`
  padding: 1rem 0;
`;

export const BoardAdministrationContainer = styled.section`
  padding: 1rem 0;
  justify-content: space-between;
  display: flex;

  @media ${theme.layout.mobile} {
    flex-wrap: wrap;
    gap: 2rem;
  }
`;
