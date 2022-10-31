import { ReactElement, useEffect } from 'react';
import GridSection from '@/Components/Section';
import HeaderDropDown from '@/Components/Header/DropDown';
import { UsePc } from '@/Utils/Hooks/useMediaQuery';
import { userState, userDataState } from '@/Recoil/user';
import { useRecoilValue, useRecoilState } from 'recoil';
import { setCookie } from '@/Pages/Login';
import { APILoginType } from '@/@Types/UserType';
import HeaderNavigation from './Navigation';
import { HeaderContainer, Logo, LoginedInfo } from './style';
import HeaderMobile from './index.mobile';

const mediaItems = [
  {
    id: 1,
    value: '교수님 소개',
    url: '/media/professor',
  },
  {
    id: 2,
    value: '졸업 요건',
    url: '/media/graduate',
  },
  {
    id: 3,
    value: '졸업생 인터뷰',
    url: '/media/interview',
  },
];

const Header = (): ReactElement => {
  const [user, setUser] = useRecoilState(userState);
  const userData = useRecoilValue<APILoginType>(userDataState);
  const reset = () => {
    setCookie('accessToken', '', { expires: new Date(Date.now()) });
    setCookie('refreshToken', '', { expires: new Date(Date.now()) });
    window.location.replace('/');
  };

  useEffect(() => {
    userData && setUser(userData);
  }, [user]);

  return (
    <>
      <UsePc>
        <HeaderContainer>
          <GridSection col4>
            <GridSection>
              <Logo src="/pictures/MIL.png" />
            </GridSection>
            <GridSection col3>
              <HeaderNavigation url="/">홈</HeaderNavigation>
              <HeaderDropDown title="미디어학과" items={mediaItems} />
              <HeaderNavigation url="/talk">게시판</HeaderNavigation>
              <HeaderNavigation url="/cil">CIL</HeaderNavigation>
            </GridSection>
          </GridSection>
          {user.name !== '' && (
            <GridSection col3 right>
              <LoginedInfo>
                <h4>{user.name}</h4>
                <p>님, 환영합니다!</p>
              </LoginedInfo>
              <button onClick={reset}>로그아웃</button>
            </GridSection>
          )}
          {user.name === '' && (
            <GridSection right>
              <HeaderNavigation url="/user/login" regular>
                로그인
              </HeaderNavigation>
            </GridSection>
          )}
        </HeaderContainer>
      </UsePc>
      <HeaderMobile />
    </>
  );
};

export default Header;
