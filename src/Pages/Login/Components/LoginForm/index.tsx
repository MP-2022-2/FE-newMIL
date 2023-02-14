import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '@/Components/Button';
import { Input } from '@/Components/Form';
import { loginApi } from '@/Utils/Store/Api/loginApi';
import { UserLoginType } from '@/@Types/UserType';
import { Link } from 'react-router-dom';
import { LoginFormContainer, IDCheckBoxContainer, SignUpContainer, SignUpLink } from './style';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isSubmitting, errors, isValidating },
  } = useForm<UserLoginType>({
    mode: 'onChange',
    defaultValues: {
      userId: localStorage.getItem('userId') ? String(localStorage.getItem('userId')) : '',
      password: '',
      idCheck: Boolean(localStorage.getItem('idCheck')),
    },
  });

  const onSubmit: SubmitHandler<UserLoginType> = (data) => {
    if (data.idCheck) {
      localStorage.setItem('userId', String(data.userId));
      localStorage.setItem('idCheck', 'true');
    } else {
      localStorage.removeItem('userId');
      localStorage.removeItem('idCheck');
    }
    loginApi({ userId: data.userId, password: data.password });
  };

  return (
    <LoginFormContainer onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="아이디"
        id="userId"
        type="text"
        placehd="example"
        caption={errors.userId?.message}
        aria-invaild={!!errors.userId}
        autoFocus
        context={register('userId', {
          required: '아이디를 입력하세요.',
        })}
      />
      <Input
        label="비밀번호"
        id="password"
        type="password"
        placehd="********"
        caption={errors.password?.message}
        aria-invaild={!!errors.password}
        context={register('password', {
          required: '비밀번호를 입력하세요.',
          minLength: {
            value: 6,
            message: '6자리 이상 비밀번호를 사용하세요.',
          },
        })}
      />
      <IDCheckBoxContainer>
        <input type="checkbox" id="idCheck" {...register('idCheck')} />
        <label htmlFor="idCheck">아이디 저장</label>
      </IDCheckBoxContainer>
      <Button
        type="submit"
        disabled={
          isSubmitting ||
          isValidating ||
          !!errors.userId ||
          !!errors.password ||
          !getValues('userId') ||
          !getValues('password')
        }
      >
        로그인
      </Button>
      <SignUpContainer>
        <p>아직 가입을 안하셨나요?</p>
        <Link to="/user/signup">
          <SignUpLink>회원가입</SignUpLink>
        </Link>
      </SignUpContainer>
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
