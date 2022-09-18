import { DefaultButton } from '@/Components/Button';
import { SignUpFormContainer } from './style';
import SignUpFormProps from './types';

const SignUpForm = ({ select }: SignUpFormProps) => (
  <>
    {select && (
      <SignUpFormContainer>
        <label htmlFor="nickname">별명</label>
        <input id="nickname" type="text" placeholder="홍길동" />
        <label htmlFor="studentid">학번</label>
        <input id="studentid" type="number" placeholder="2021XXXXX" />
        <label htmlFor="email">이메일</label>
        <div className="email">
          <input id="email" type="email" placeholder="example" />
          <span>@ajou.ac.kr</span>
        </div>
        <label htmlFor="pw">비밀번호</label>
        <input id="pw" type="password" placeholder="*********" />
        <DefaultButton>회원가입</DefaultButton>
        <DefaultButton url="/">뒤로가기</DefaultButton>
      </SignUpFormContainer>
    )}

    {!select && (
      <SignUpFormContainer>
        <label htmlFor="nickname">별명</label>
        <input id="nickname" type="text" placeholder="홍길동" />
        <label htmlFor="studentid">학번</label>
        <input id="studentid" type="number" placeholder="2021XXXXX" />
        <label htmlFor="email">이메일</label>
        <input id="email" type="email" placeholder="example@ajou.ac.kr" />
        <label htmlFor="pw">비밀번호</label>
        <input id="pw" type="password" placeholder="*********" />
        <label htmlFor="company">회사</label>
        <input id="company" type="text" placeholder="미디어인더스트리" />
        <DefaultButton>회원가입</DefaultButton>
        <DefaultButton url="/">뒤로가기</DefaultButton>
      </SignUpFormContainer>
    )}
  </>
);

export default SignUpForm;
