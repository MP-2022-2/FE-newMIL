import { ReactElement, useEffect, useState } from 'react';
import GridSection from '@/Components/Section';
import HeaderDropDown from '@/Components/Header/DropDown';
import { UsePc } from '@/Utils/Hooks/useMediaQuery';
import { userState, userDataState } from '@/Recoil/user';
import { useRecoilValue, useRecoilState } from 'recoil';
import { setCookie } from '@/Pages/Login';
import { APILoginType } from '@/@Types/UserType';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Button from '@/Components/Button';
import HeaderNavigation from './Navigation';
import { HeaderWrapper, HeaderContainer, Logo, LoginedInfo, LoginedInfoContents } from './style';
import HeaderMobile from './index.mobile';
import HeaderProps from './types';

import ProfileEditor from './ProfileEditor';

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

/**
 언더바 홈페이지의 메인 Header입니다.
 * @param isNotShownEditor boolean 글쓰기 버튼 On/Off
 * @param isNotShownProfile 프로필 On/Off
 * @param isShownProfileEditor 프로필 에디터 On/Off
 */
const Header = (props: HeaderProps): ReactElement => {
  const {
    isShownProfileEditor = false,
    isNotShownEditor = false,
    isNotShownProfileIcon = false,
  } = props;
  const [user, setUser] = useRecoilState(userState);
  const userData = useRecoilValue<APILoginType>(userDataState);
  const [isShownProfile, setIsShownProfile] = useState(false);
  const [onClickProfileEditor, setOnClickProfileEditor] = useState(false);

  const reset = () => {
    setCookie('accessToken', '', {
      path: '/',
      expires: new Date(Date.now()),
    });
    setCookie('refreshToken', '', {
      path: '/',
      expires: new Date(Date.now()),
    });
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
        <HeaderWrapper>
          <HeaderContainer>
            <GridSection col3>
              <GridSection>
                <Link to="/">
                  <Logo src="/pictures/MIL.png" />
                </Link>
              </GridSection>
              <GridSection col2>
                <HeaderDropDown title="미디어학과" items={mediaItems} />
                <HeaderNavigation url={`/board/free`}>게시판</HeaderNavigation>
                <HeaderNavigation url="/cil">CIL</HeaderNavigation>
              </GridSection>
            </GridSection>
            {user.name !== '' && (
              <GridSection col3 right gap16>
                {isShownProfileEditor && (
                  <Button md onClick={() => setOnClickProfileEditor(!onClickProfileEditor)}>
                    프로필 수정
                  </Button>
                )}
                {!isNotShownEditor && (
                  <Button sm url="/board/edit">
                    글쓰기
                  </Button>
                )}
                {!isNotShownProfileIcon ? (
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
                        <h4>{user.name}</h4>
                        <p>{user.studentId}</p>
                        <Button sm secondary url="/mypage">
                          내 정보
                        </Button>
                        <Button sm third onClick={reset}>
                          로그아웃
                        </Button>
                      </LoginedInfoContents>
                    )}
                  </LoginedInfo>
                ) : (
                  <Button third sm onClick={reset}>
                    로그아웃
                  </Button>
                )}
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
          {onClickProfileEditor && <ProfileEditor onClick={() => setOnClickProfileEditor(false)} />}
        </HeaderWrapper>
      </UsePc>
      <HeaderMobile />
    </>
  );
};

export default Header;
