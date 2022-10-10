import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@/Components/Button';
import { Input } from '@/Components/Form';
import { LoginFormContainer } from './style';
import FormValues from './types';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => alert(JSON.stringify(data));

  return (
    <LoginFormContainer onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="아이디"
        id="userId"
        type="text"
        placehd="example"
        autoFocus
        context={register('id', { required: true })}
      />
      <Input
        label="비밀번호"
        id="password"
        type="password"
        placehd="********"
        min="6"
        context={register('pw', { required: true })}
      />
      <Button type="submit" disabled={isSubmitting}>
        로그인
      </Button>
      <Button type="button" url="/user/signup">
        회원가입
      </Button>
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

// const loginFunc = () => {
//   axios.post(`${process.env.REACT_APP_API_URL}/user/login`, {
//     userId: `id`,
//     password: `pw`,
//   });
// };
