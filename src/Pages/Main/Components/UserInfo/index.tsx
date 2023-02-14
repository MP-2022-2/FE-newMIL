import GridSection from '@/Components/Section';
import useScrollFade from '@/Utils/Hooks/useScrollFade';
import { useRecoilValue } from 'recoil';
import { userState } from '@/Utils/Store/Recoil/user';
import { switchingRole } from '@/Pages/MyPage/index';
import { InfoRole, InfoStudentId } from '@/Pages/MyPage/style';
import { useCallback, useState, useEffect } from 'react';
import instance from '@/Utils/Store/Api/axios';
import { getCookie } from '@/Pages/Login';
import GPA from '@/Pages/MyPage/Components/GPA';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { UserInfoContainer, InfoContainer, Area, MainLoginButton } from './style';

export default function UserInfo() {
  const user = useRecoilValue(userState);
  const [isGPA, setGPA] = useState(0);
  const userRole = switchingRole(user.identity);

  const getGPA = useCallback(async () => {
    try {
      await instance('subject/mypage').then((res) =>
        setGPA(res.data.majorTotal + res.data.nonMajorTotal),
      );
    } catch (err) {
      console.log(err);
    }
  }, [user]);

  useEffect(() => {
    if (getCookie('accesstoken') !== undefined) getGPA();
  }, []);

  return (
    <GridSection col5 mobile>
      <UserInfoContainer isBlur={user.name === ''} {...useScrollFade('up', 1.5, 0.5)}>
        {user.name !== '' ? (
          <>
            <Area>
              <h3>
                <span>{user.name ?? '홍길동'}</span>님의 정보
              </h3>
              <InfoContainer>
                <p>{user.nickName ?? '나는바보'}</p>
                <p>{userRole ?? 'ROLE_STUDENT'}</p>
                <caption>{user.studentId ?? '20XXXXXXX'}</caption>
              </InfoContainer>
            </Area>
            <Area>
              <GPA max={128} current={isGPA ?? '0'} />
            </Area>
          </>
        ) : (
          <>
            <h3>로그인을 하면 정보를 볼 수 있어요!</h3>
            <Link to="/user/login">
              <MainLoginButton>
                <Icon width="28" height="28" color="#fff1c5" icon="material-symbols:lock-person" />
              </MainLoginButton>
            </Link>
          </>
        )}
      </UserInfoContainer>
    </GridSection>
  );
}
