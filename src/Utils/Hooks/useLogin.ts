import { useRecoilState } from 'recoil';
import { userDataState } from '@/Utils/Store/Recoil/user';
import { APILoginType } from '@/@Types/UserType';

const useLogin = () => {
  const [userData, setUserData] = useRecoilState<APILoginType>(userDataState);

  if (userData.status === 200) {
    setUserData(userData);
    return true;
  }
  setUserData({
    ...userData,
    name: '',
    track: '',
    studentId: 0,
    company: '',
    email: '',
  });
  return false;
};

export default useLogin;
