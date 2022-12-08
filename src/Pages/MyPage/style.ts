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
`;

export const Profile = styled.div``;

export const ProfileInfoContainer = styled.div`
  flex-direction: row;
`;

// Subject
export const SubjectWrapper = styled.section`
  padding: 2rem 0;
`;

export const SubjectContainer = styled.section`
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
`;

// Board
export const BoardAdministrationWrapper = styled.section`
  padding: 1rem 0;
`;

export const BoardAdministrationContainer = styled.section`
  display: flex;
`;
