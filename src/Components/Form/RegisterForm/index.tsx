import { DefaultButton } from '@/Components/Button';
import { RegisterFormContainer } from './style';

const RegisterForm = () => (
  <RegisterFormContainer>
    <input type="text" placeholder="별명" />
    <input type="text" placeholder="이메일" />
    <input type="text" placeholder="비밀번호" />
    <input type="text" placeholder="학번" />
    <DefaultButton>회원가입</DefaultButton>
    <DefaultButton url="/">뒤로가기</DefaultButton>
  </RegisterFormContainer>
);

export default RegisterForm;
