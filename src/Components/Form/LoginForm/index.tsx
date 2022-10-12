import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@/Components/Button';
import { Input } from '@/Components/Form';
import { loginFunc } from '@/Utils/Api/loginApi';
import { LoginFormContainer } from './style';
import FormValues from './types';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    loginFunc({ userId: data.id, password: data.pw });
  };

  return (
    <LoginFormContainer onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="아이디"
        id="userId"
        type="text"
        placehd="example"
        caption={errors.id?.message}
        autoFocus
        context={register('id', {
          required: '아이디를 입력하세요.',
        })}
      />
      <Input
        label="비밀번호"
        id="password"
        type="password"
        placehd="********"
        caption={errors.pw?.message}
        context={register('pw', {
          required: '비밀번호를 입력하세요.',
          minLength: {
            value: 6,
            message: '6자리 이상 비밀번호를 사용하세요.',
          },
        })}
      />
      <div>
        <input type="checkbox" id="idCheck" />
        <label htmlFor="idCheck">아이디 저장</label>
      </div>
      <Button type="submit" disabled={isSubmitting}>
        로그인
      </Button>
      <div>
        <p>아직 MIL 가입을 안하셨나요?</p>
        <p>회원가입</p>
      </div>
    </LoginFormContainer>
  );
};

export default LoginForm;

// 구현했던 함수
//  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     alert('onSubmit Test');
//   };

//  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
//     const target = e.target as HTMLTextAreaElement;
//     setValues({
//       ...values,
//       [target.id]: target.value,
//     });
//   };
