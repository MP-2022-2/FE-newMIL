import { DefaultButton } from '@/Components/Button';
import { SignUpFormContainer } from './style';

const SignUpForm = () => (
  <SignUpFormContainer>
    <input type="text" placeholder="별명" />
    <input type="text" placeholder="학번" />
    <div className="email">
      <input type="text" placeholder="이메일" />
      <span>@ajou.ac.kr</span>
    </div>
    <input type="text" placeholder="비밀번호" />
    <input type="text" placeholder="회사" />
    <DefaultButton>회원가입</DefaultButton>
    <DefaultButton url="/">뒤로가기</DefaultButton>
  </SignUpFormContainer>
);

export default SignUpForm;
