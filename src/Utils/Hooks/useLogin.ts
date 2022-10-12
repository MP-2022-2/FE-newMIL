import { useRecoilState } from 'recoil';
import { userDataState } from '@/Recoil/user';
import { getCookie } from '@/Pages/Login';

const useLogin = () => {
  const accessToken = getCookie('accessToken');
  if (accessToken === undefined) return 0;

  const [userData, setUserData] = useRecoilState(userDataState);

  userData.status === 200
    ? setUserData(userData)
    : setUserData({
        ...userData,
        email: '',
        name: '',
        student_id: 0,
        company: '',
        track: '',
      });

  return userData.status;
};

export default useLogin;
