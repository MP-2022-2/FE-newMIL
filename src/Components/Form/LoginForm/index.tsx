import { useEffect } from 'react';
import { DefaultButton } from '@/Components/Button';
import { Input } from '@/Components/Form';
import { LoginFormContainer } from './style';

const LoginForm = () => {
  useEffect(() => {
    console.log('MODE', process.env.REACT_APP_MODE);
    console.log('MODE', process.env.REACT_APP_API_URL);
  });

  return (
    <LoginFormContainer action="/user/login" method="post">
      <Input label="아이디" id="id" type="text" place="example" autoFocus required />
      <Input label="비밀번호" id="pw" type="password" place="********" min="6" required />
      <DefaultButton type="submit">로그인</DefaultButton>
      <DefaultButton type="button" url="/user/signup">
        회원가입
      </DefaultButton>
    </LoginFormContainer>
  );
};

export default LoginForm;
