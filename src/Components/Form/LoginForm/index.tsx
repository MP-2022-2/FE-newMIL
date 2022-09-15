import { DefaultButton } from '@/Components/Button';
import { LoginFormContainer } from './style';

const LoginForm = () => (
  <LoginFormContainer>
    <input type="text" placeholder="이메일" />
    <input type="text" placeholder="비밀번호" />
    <DefaultButton>로그인</DefaultButton>
    <DefaultButton url="/signup">회원가입</DefaultButton>
  </LoginFormContainer>
);

export default LoginForm;
