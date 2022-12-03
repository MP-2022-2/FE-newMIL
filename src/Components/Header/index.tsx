import { ReactElement, useEffect, useState } from 'react';
import GridSection from '@/Components/Section';
import HeaderDropDown from '@/Components/Header/DropDown';
import { UsePc } from '@/Utils/Hooks/useMediaQuery';
import { userState, userDataState } from '@/Recoil/user';
import { useRecoilValue, useRecoilState } from 'recoil';
import { removeCookie } from '@/Pages/Login';
import { APILoginType } from '@/@Types/UserType';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import HeaderNavigation from './Navigation';
import { HeaderContainer, Logo, LoginedInfo, LogoutButton, LoginedInfoContents } from './style';
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
  const [isShownProfile, setIsShownProfile] = useState(false);

  const reset = () => {
    removeCookie('accessToken');
    removeCookie('refreshToken');
    window.location.replace('/');
  };

  useEffect(() => {
    userData && setUser(userData);
  }, [user]);

  const onToggleProfile = () => {
    setIsShownProfile(!isShownProfile);
  };

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
              <HeaderNavigation url={`/board/자유`}>게시판</HeaderNavigation>
              <HeaderNavigation url="/cil">CIL</HeaderNavigation>
            </GridSection>
          </GridSection>
          {user.name !== '' && (
            <GridSection col3 right gap16>
              <LoginedInfo>
                <Icon
                  onClick={onToggleProfile}
                  width="36"
                  height="36"
                  color="#005696"
                  icon="healthicons:ui-user-profile"
                />
                {isShownProfile && (
                  <LoginedInfoContents>
                    <Link to="/mypage">
                      <h4>{user.name}</h4>
                    </Link>
                    <p>{user.studentId}</p>
                    <LogoutButton third onClick={reset}>
                      로그아웃
                    </LogoutButton>
                  </LoginedInfoContents>
                )}
              </LoginedInfo>
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
