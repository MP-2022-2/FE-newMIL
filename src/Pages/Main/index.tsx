import Header from '@/Components/Header';
import useLogin from '@/Utils/Hooks/useLogin';
import { MainContainer } from './style';

const MainPage = () => {
  useLogin();

  return (
    <>
      <Header />
      <MainContainer>
        이 페이지는 메인 페이지 입니다. <br />
        메인
      </MainContainer>
    </>
  );
};

export default MainPage;
