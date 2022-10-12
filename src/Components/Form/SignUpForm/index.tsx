import { Button } from '@/Components/Button';
import { Input } from '@/Components/Form';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SignUpFormContainer } from './style';
import { SignUpFormProps, SignUpFormValues } from './types';

const SignUpForm = ({ select }: SignUpFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignUpFormValues>();

  const onSubmit: SubmitHandler<SignUpFormValues> = async (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      {select && (
        <SignUpFormContainer onSubmit={handleSubmit(onSubmit)}>
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
            placehd="*********"
            caption={errors.pw?.message}
            autoFocus
            context={register('pw', {
              required: '비밀번호를 입력하세요.',
              minLength: {
                value: 6,
                message: '6자리 이상 비밀번호를 사용하세요.',
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
              required: '비밀번호를 입력하세요.',
              minLength: {
                value: 6,
                message: '6자리 이상 비밀번호를 사용하세요.',
              },
            })}
          />
          <Input
            label="이메일"
            id="email"
            type="email"
            placehd="example@ajou.ac.kr"
            caption={errors.email?.message}
            autoFocus
            context={register('email', {
              required: '이메일을 입력하세요.',
            })}
          />
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
          <Button type="submit" disabled={isSubmitting}>
            회원가입
          </Button>
          <Button type="button" url="/">
            메인으로
          </Button>
        </SignUpFormContainer>
      )}

      {!select && (
        <SignUpFormContainer>
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
            placehd="*********"
            caption={errors.pw?.message}
            autoFocus
            context={register('pw', {
              required: '비밀번호를 입력하세요.',
              minLength: {
                value: 6,
                message: '6자리 이상 비밀번호를 사용하세요.',
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
              required: '비밀번호를 입력하세요.',
              minLength: {
                value: 6,
                message: '6자리 이상 비밀번호를 사용하세요.',
              },
            })}
          />
          <Input
            label="이메일"
            id="email"
            type="email"
            placehd="example@ajou.ac.kr"
            caption={errors.email?.message}
            autoFocus
            context={register('email', {
              required: '이메일을 입력하세요.',
            })}
          />
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
          <Button type="submit" disabled={isSubmitting}>
            회원가입
          </Button>
          <Button type="button" url="/">
            뒤로가기
          </Button>
        </SignUpFormContainer>
      )}
    </>
  );
};

export default SignUpForm;
