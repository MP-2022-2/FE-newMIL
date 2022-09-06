import { LoginFormContainer } from './style';

const LoginForm = () => (
  <LoginFormContainer>
    <input type="text" placeholder="이메일" />
    <input type="text" placeholder="비밀번호" />
    <button>로그인</button>
  </LoginFormContainer>
);

export default LoginForm;
