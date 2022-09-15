import { useRecoilState } from 'recoil';
import { userDataState } from '@/Recoil/user';

const useLogin = () => {
  const [userData, setUserData] = useRecoilState(userDataState);

  userData.status
    ? setUserData(userData.user)
    : setUserData({
        isAdmin: false,
        userIdx: 0,
        name: '',
        password: '',
        nickname: '',
        studentId: 0,
        email: '',
        profilePhoto: '',
      });

  return userData.status;
};

export default useLogin;