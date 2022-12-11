import Header from '@/Components/Header';
import styled from 'styled-components';

export const ErrorPageContainer = styled.section`
  h1 {
    margin-top: 10rem;
    text-align: center;
  }
`;

export default function ErrorPage() {
  return (
    <ErrorPageContainer>
      <Header />
      <h1>페이지를 찾을 수 없습니다.</h1>
    </ErrorPageContainer>
  );
}
