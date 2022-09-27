import { DefaultButton } from '@/Components/Button';
import { Input } from '@/Components/Form';
import axios from 'axios';
import React, { useState } from 'react';
import { LoginFormContainer } from './style';

const LoginForm = () => {
  const [values, setValues] = useState({
    userId: '',
    password: '',
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLTextAreaElement;
    setValues({
      ...values,
      [target.id]: target.value,
    });
  };

  const loginFunc = () => {
    axios.post(`${process.env.REACT_APP_API_URL}/user/login`, {
      userId: `${values.userId}`,
      password: `${values.password}`,
    });
  };

  return (
    <LoginFormContainer action="/" method="post">
      <Input
        onChange={handleChange}
        value={values.userId}
        label="아이디"
        id="userId"
        type="text"
        place="example"
        autoFocus
        required
      />
      <Input
        onChange={handleChange}
        value={values.password}
        label="비밀번호"
        id="password"
        type="password"
        place="********"
        min="6"
        required
      />
      <DefaultButton type="submit" onClick={loginFunc}>
        로그인
      </DefaultButton>
      <DefaultButton type="button" url="/user/signup">
        회원가입
      </DefaultButton>
    </LoginFormContainer>
  );
};

export default LoginForm;

//  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     alert('onSubmit Test');
//   };
