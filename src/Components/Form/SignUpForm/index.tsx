import { Button } from '@/Components/Button';
import { Input } from '@/Components/Form';
import { useForm, SubmitHandler } from 'react-hook-form';
import { UserSignUpType } from '@/@Types/UserType';
import { SignUpContext } from '@/Pages/SignUp';
import { useContext, useState } from 'react';
// import { emailFunc } from '@/Utils/Api/EmailApi';
import { SignUpFormContainer, Title, DivideBar } from './style';

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<UserSignUpType>({ mode: 'onBlur' });

  const { choose } = useContext(SignUpContext);
  const [auth, setAuth] = useState(false);

  const onSubmit: SubmitHandler<UserSignUpType> = async (data) => {
    alert(JSON.stringify(data));
  };

  const useEmailAuth = () => {
    if (auth) {
      setAuth(false);
      reset({ verify: '' });
    } else {
      // emailFunc({ email: getValues('email') });
      setAuth(true);
    }
  };

  return (
    <SignUpFormContainer onSubmit={handleSubmit(onSubmit)}>
      <Title>회원가입</Title>
      <Input
        label="이메일"
        id="email"
        type="email"
        placehd="example@ajou.ac.kr"
        caption={errors.email?.message}
        autoFocus
        context={register('email', {
          required: '아주 이메일을 입력하세요.',
          pattern: {
            value: /[a-zA-Z0-9]+@ajou.ac.kr/,
            message: '아주 이메일로만 인증이 가능합니다.',
          },
        })}
      />
      {!auth && (
        <Button
          disabled={!!errors.email || !getValues('email')}
          id="email"
          type="button"
          onClick={useEmailAuth}
        >
          인증메일 발송
        </Button>
      )}
      {auth && (
        <>
          <Input
            id="verify"
            caption={errors.verify?.message}
            type="text"
            placehd="인증번호를 입력하세요"
            autoFocus
            context={register('verify', {
              minLength: {
                value: 8,
                message: '8자리 인증번호를 입력하세요',
              },
            })}
          />
          <Button
            disabled={!!errors.verify || !getValues('verify')}
            id="confirm"
            type="button"
            onClick={useEmailAuth}
          >
            인증하기
          </Button>
          <Button third onClick={() => reset({ verify: '' })}>
            아주메일 재전송
          </Button>
        </>
      )}
      <DivideBar />
      <Input
        label="아이디"
        id="userId"
        type="text"
        placehd="example"
        caption={errors.userId?.message}
        autoFocus
        context={register('userId', {
          required: '아이디를 입력하세요.',
        })}
      />
      <Input
        label="비밀번호"
        id="password"
        type="password"
        placehd="*********"
        caption={errors.password?.message}
        autoFocus
        context={register('password', {
          required: '영문, 숫자를 혼용하여 6~12자리 비밀번호를 입력해주세요.',
          minLength: {
            value: 6,
            message: '6자리 이상 비밀번호를 사용하세요.',
          },
          maxLength: {
            value: 16,
            message: '16자리 이하 비밀번호를 사용하세요.',
          },
          pattern: {
            value: /^(?=.*\d)(?=.*[a-zA-ZS]).{8,}/,
            message: '영문과 숫자를 혼용하여 입력해주세요',
          },
        })}
      />
      <Input
        label="비밀번호 확인"
        id="passwordcheck"
        type="password"
        placehd="*********"
        caption={errors.pwcheck?.message}
        autoFocus
        context={register('pwcheck', {
          required: '영문, 숫자를 혼용하여 6~12자리 비밀번호를 입력해주세요.',
          minLength: {
            value: 6,
            message: '6자리 이상 비밀번호를 사용하세요.',
          },
          maxLength: {
            value: 16,
            message: '16자리 이하 비밀번호를 사용하세요.',
          },
          pattern: {
            value: /^(?=.*\d)(?=.*[a-zA-ZS]).{6,}/,
            message: '영문과 숫자를 혼용하여 입력해주세요',
          },
          validate: {
            matchesPw: (val) => {
              const { password } = getValues();
              return password === val || '비밀번호가 일치하지 않습니다.';
            },
          },
        })}
      />
      <DivideBar />
      <Input
        label="이름"
        id="name"
        type="text"
        placehd="김태석"
        caption={errors.name?.message}
        autoFocus
        context={register('name', {
          required: '이름을 입력하세요.',
        })}
      />
      <Input
        label="학번"
        id="studentId"
        type="text"
        placehd="20172XXXX"
        caption={errors.studentId?.message}
        autoFocus
        context={register('studentId', {
          required: '학번을 입력하세요.',
        })}
      />
      {choose === '졸업생' && (
        <Input
          label="회사"
          id="company"
          type="text"
          placehd="미디어인더스트리"
          caption={errors.company?.message}
          autoFocus
          context={register('company', {
            required: '회사를 입력하세요.',
          })}
        />
      )}
      <Button
        id="signup"
        type="submit"
        disabled={
          isSubmitting ||
          !!errors.userId ||
          !!errors.password ||
          !!errors.studentId ||
          !!errors.name ||
          !getValues('userId') ||
          !getValues('password') ||
          !getValues('studentId') ||
          !getValues('name')
        }
      >
        다음으로
      </Button>
    </SignUpFormContainer>
  );
};

export default SignUpForm;
