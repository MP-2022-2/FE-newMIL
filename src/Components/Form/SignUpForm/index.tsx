import { DefaultButton } from '@/Components/Button';
import { SignUpFormContainer } from './style';

const SignUpForm = () => (
  <SignUpFormContainer>
    <input type="text" placeholder="별명" />
    <input type="text" placeholder="이메일" />
    <input type="text" placeholder="비밀번호" />
    <input type="text" placeholder="학번" />
    <DefaultButton>회원가입</DefaultButton>
    <DefaultButton url="/">뒤로가기</DefaultButton>
  </SignUpFormContainer>
);

export default SignUpForm;
