import { DefaultButton } from '@/Components/Button';
import React, { useState } from 'react';
import { Input } from '@/Components/Form';
import axios from 'axios';
import { SignUpFormContainer } from './style';
import SignUpFormProps from './types';

const SignUpForm = ({ select }: SignUpFormProps) => {
  const [values, setValues] = useState({
    userId: '',
    email: '',
    name: '',
    password: '',
    studentId: '',
    identity: '',
    company: '',
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLTextAreaElement;
    setValues({
      ...values,
      [target.id]: target.value,
    });
  };

  const SignUpFunc = () => {
    axios.post(`${process.env.REACT_APP_API_URL}/user/signup`, {
      userId: `${values.userId}`,
      password: `${values.password}`,
      email: `${values.email}`,
      name: `${values.name}`,
      studentId: `${values.studentId}`,
      identity: `${values.identity}`,
      company: `${values.company}`,
    });
  };
  return (
    <>
      {select && (
        <SignUpFormContainer>
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
          <Input
            label="이메일"
            onChange={handleChange}
            value={values.email}
            id="email"
            type="email"
            place="example@ajou.ac.kr"
            required
          />
          <Input
            label="이름"
            onChange={handleChange}
            value={values.name}
            id="name"
            type="text"
            place="김태석"
            required
          />
          <Input
            label="학번"
            onChange={handleChange}
            value={values.studentId}
            id="studentId"
            type="text"
            place="2021XXXXX"
            required
          />
          <DefaultButton type="submit" onClick={() => SignUpFunc()}>
            회원가입
          </DefaultButton>
          <DefaultButton type="button" url="/">
            뒤로가기
          </DefaultButton>
        </SignUpFormContainer>
      )}

      {!select && (
        <SignUpFormContainer>
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
          <Input
            label="이메일"
            onChange={handleChange}
            value={values.email}
            id="email"
            type="email"
            place="example@ajou.ac.kr"
            required
          />
          <Input
            label="이름"
            onChange={handleChange}
            value={values.name}
            id="name"
            type="text"
            place="김태석"
            required
          />
          <Input
            label="학번"
            onChange={handleChange}
            value={values.studentId}
            id="studentId"
            type="text"
            place="2021XXXXX"
            required
          />
          <Input
            label="회사"
            onChange={handleChange}
            value={values.company}
            id="company"
            type="text"
            place="미디어인더스트리"
            required
          />
          <DefaultButton type="submit" onClick={() => SignUpFunc()}>
            회원가입
          </DefaultButton>
          <DefaultButton type="button" url="/">
            뒤로가기
          </DefaultButton>
        </SignUpFormContainer>
      )}
    </>
  );
};

export default SignUpForm;
