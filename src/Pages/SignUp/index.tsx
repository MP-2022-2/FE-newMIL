import { SignUpForm } from '@/Components/Form';
import { useState } from 'react';
import { SignUpContainer } from './style';

const SignUpPage = () => {
  const [select, setSelect] = useState<boolean>(true);

  return (
    <SignUpContainer>
      <h2>회원가입</h2>
      <div className="select">
        <a onClick={() => setSelect(true)}>
          <li className={select ? 'on' : 'off'}>재학생</li>
        </a>
        <a onClick={() => setSelect(false)}>
          <li className={select ? 'off' : 'on'}>졸업생</li>
        </a>
      </div>
      <SignUpForm select={select} />
    </SignUpContainer>
  );
};

export default SignUpPage;
