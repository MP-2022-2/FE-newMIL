import { UserAuthType } from '@/@Types/UserType';
import { ApiReturn } from '@/@Types/api';
import axios from 'axios';
import { SignUpToggleType } from '@/Pages/SignUp/SignUpPage';

interface EmailApiReturn extends ApiReturn {
  verified: boolean;
  verifiedEmail?: string;
  toggleForm: SignUpToggleType;
}

export const emailApi = (data: UserAuthType) => {
  const { email, randomCode, onToggleEmailVerifiedForm } = data;

  const postData = onToggleEmailVerifiedForm === 'certified' ? { email } : { email, randomCode };
  const postURL =
    onToggleEmailVerifiedForm === 'certified'
      ? `${process.env.REACT_APP_API_URL}/user/certification`
      : `${process.env.REACT_APP_API_URL}/user/verification`;

  return new Promise<EmailApiReturn>((resolve) => {
    axios
      .post(postURL, postData)
      .then((res) => {
        resolve({
          status: 'success',
          message: res.data.msg,
          verified: onToggleEmailVerifiedForm !== 'certified',
          verifiedEmail: onToggleEmailVerifiedForm === 'verified' ? email : '',
          toggleForm: onToggleEmailVerifiedForm === 'certified' ? 'verified' : 'certified',
        });
      })
      .catch((err) => {
        resolve({
          status: 'error',
          message: err.response.data.msg,
          verified: false,
          toggleForm: 'certified',
        });
      });
  });
};
