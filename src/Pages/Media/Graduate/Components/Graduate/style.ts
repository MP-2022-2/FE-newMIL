import styled from 'styled-components';
import theme from '@/Styles/theme';

export const TitleAndSelectWrapper = styled.div`
  display: block;
`;

export const YearSelectWrapper = styled.div`
  display: block;
  margin-top: 1rem;
  width: 12.25rem;
`;
export const YearSelect = styled.select`
  display: block;
  width: 100%;
`;
export const CompleteGradeWrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border: 1px solid #b3b3b3;
  border-radius: 10px;
  width: 12.25rem;
  padding: 1rem 0.75rem;
`;
export const TotalGradeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  h4 {
    margin-right: auto;
  }
`;
export const TotalGradeContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  h1 {
    color: ${theme.color.ajouBlue};
  }
  h2 {
    margin-left: 1rem;
  }
`;

export const PreviewWrapper = styled.div`
  display: block;
  margin-top: 1rem;
  width: 60.375rem;
  border-radius: 10px;
  background-color: '#D9D9D9';
  border: 1px solid #b3b3b3;
`;

export const Preview = styled.img`
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
`;
