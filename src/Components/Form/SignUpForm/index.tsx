import { DefaultButton } from '@/Components/Button';
import { useEffect } from 'react';
import { Input } from '@/Components/Form';
import { SignUpFormContainer } from './style';
import SignUpFormProps from './types';

const SignUpForm = ({ select }: SignUpFormProps) => {
  useEffect(() => {
    console.log('MODE', process.env.REACT_APP_MODE);
    console.log('MODE', process.env.REACT_APP_API_URL);
  });
  return (
    <>
      {select && (
        <SignUpFormContainer>
          <Input label="아이디" id="id" type="text" place="example" autoFocus required />
          <Input label="비밀번호" id="pw" type="pw" place="*********" required />
          <Input label="이메일" id="email" type="email" place="example@ajou.ac.kr" required />
          <Input label="이름" id="name" type="text" place="김태석" required />
          <Input label="학번" id="studentid" type="text" place="2021XXXXX" required />
          <DefaultButton type="submit">회원가입</DefaultButton>
          <DefaultButton type="button" url="/">
            뒤로가기
          </DefaultButton>
        </SignUpFormContainer>
      )}

      {!select && (
        <SignUpFormContainer>
          <Input label="아이디" id="id" type="text" place="example" autoFocus required />
          <Input label="비밀번호" id="pw" type="pw" place="*********" required />
          <Input label="이메일" id="email" type="email" place="example@ajou.ac.kr" required />
          <Input label="이름" id="name" type="text" place="김태석" required />
          <Input label="학번" id="studentid" type="text" place="2021XXXXX" required />
          <Input label="회사" id="company" type="text" place="미디어인더스트리" required />
          <DefaultButton type="submit">회원가입</DefaultButton>
          <DefaultButton type="button" url="/">
            뒤로가기
          </DefaultButton>
        </SignUpFormContainer>
      )}
    </>
  );
};

export default SignUpForm;

// const doit = () => {
//     axios
//       .post(`http://15.164.192.250:8080/user/signup`, {
//         userId: 'sukyuree',
//         email: 'sukyuree@ajou.ac.kr',
//         password: 'mediaproject',
//         name: '김태석',
//         studentId: 201721083,
//         identity: 'ADMIN',
//         company: 'KB국민카드',
//       })
//       .then((res) => {
//         console.log(`RESPONSE : ${JSON.stringify(res.data)}`);
//       })
//       .catch((error) => {
//         console.log(`ERROR : ${JSON.stringify(error)}`);
//       });
//   };
