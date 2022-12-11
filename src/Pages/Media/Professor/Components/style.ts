import theme from '@/Styles/theme';
import styled from 'styled-components';

export const ProfessorContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  align-self: center;
  justify-content: center;
  max-width: ${theme.layout.maxWidth};
  margin: 3rem auto;
  padding-bottom: 3rem;

  a {
    display: block;
    width: 100%;
  }

  @media ${theme.layout.full} {
    justify-content: space-between;
  }
`;
export const ProfessorComponent = styled.article`
  display: flex;
  flex-direction: column;

  text-align: left;

  width: 100%;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.12);
  background-color: #ededed;
  border-radius: 10px;

  object-fit: cover;
`;

export const Profile = styled.img`
  width: 9.375rem;
  height: 9.375rem;
  object-fit: cover;
  border-radius: 50%;
`;

export const ProfileBox = styled.div`
  margin-left: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ProfileText = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  margin-bottom: auto;
`;
