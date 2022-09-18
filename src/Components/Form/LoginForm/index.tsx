import { DefaultButton } from '@/Components/Button';
import { LoginFormContainer } from './style';

const LoginForm = () => (
  <LoginFormContainer>
    <label htmlFor="email">이메일</label>
    <input id="email" type="email" placeholder="example@gmail.com" />
    <label htmlFor="email">비밀번호</label>
    <input type="password" placeholder="**********" min="6" />
    <DefaultButton>로그인</DefaultButton>
    <DefaultButton url="/signup">회원가입</DefaultButton>
  </LoginFormContainer>
);

export default LoginForm;
