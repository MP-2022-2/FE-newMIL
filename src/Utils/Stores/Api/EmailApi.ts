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

  const postData = onToggleEmailVerifiedForm === 'verified' ? { email, randomCode } : { email };
  const postURL =
    onToggleEmailVerifiedForm === 'verified'
      ? `${process.env.REACT_APP_API_URL}/user/verification`
      : `${process.env.REACT_APP_API_URL}/user/certification`;

  return new Promise<EmailApiReturn>((resolve) => {
    axios
      .post(postURL, postData)
      .then((res) => {
        resolve({
          status: 'success',
          message: res.data.msg,
          verified: onToggleEmailVerifiedForm !== 'certified',
          verifiedEmail: onToggleEmailVerifiedForm === 'verified' ? email : '',
          toggleForm: onToggleEmailVerifiedForm === 'verified' ? 'certified' : 'verified',
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
