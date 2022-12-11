import styled from 'styled-components';
import theme from '@/Styles/theme';

export const PageWrapper = styled.div`
  display: block;
`;

export const PageContainer = styled.section`
  display: block;
  ${theme.common.flexCenterColumn};
`;

export const ProfessorDetailComponent = styled.div`
  display: block;
`;

export const ProfessorSimpleComponent = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1.5rem;
`;

export const ProfessorProfileContainer = styled.div`
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  padding: 1.25rem 1.5rem 1.25rem 1.5rem;
  overflow: hidden;
`;

export const ProfessorProfile = styled.img`
  width: 9.375rem;
  height: 9.375rem;
  object-fit: cover;
  border-radius: 50%;
`;

export const ProfessorSimpleInfoContainer = styled.div`
  width: calc(67.25rem - 3rem);
  margin-left: 1.5rem;
  background-color: #d9d9d9;
  border-radius: 10px;
  padding: 1.5rem;
  p {
    color: #737373;
  }
`;

export const ProfessorDetailInfoContainer = styled.div`
  width: calc(100% - 3rem);
  margin-top: 2rem;
  padding: 0.5rem 1.5rem 1.5rem 1.5rem;

  background-color: #d9d9d9;
  border-radius: 10px;
  p {
    color: #737373;
  }
  h2 {
    margin-bottom: 0.5rem;
    margin-top: 1rem;
  }
`;
