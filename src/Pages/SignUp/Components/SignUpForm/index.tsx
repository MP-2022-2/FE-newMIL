import Button from '@/Components/Button';
import { Input, Timer } from '@/Components/Form';
import { useForm, SubmitHandler } from 'react-hook-form';
import { UserSignUpType } from '@/@Types/UserType';
import { SignUpContext } from '@/Pages/SignUp';
import { useContext, useState, createContext } from 'react';
import { emailApi } from '@/Utils/Store/Api/EmailApi';
import { signUpApi } from '@/Utils/Store/Api/SignUpApi';
import { useRecoilState } from 'recoil';
import { userSignUpState } from '@/Utils/Store/Recoil/user';
import { Subjects } from '@/Utils/Constants/subject';
import TrackForm from '../TrackForm';
import { SignUpFormContainer, Title, DivideBar } from './style';

export const TrackContext = createContext({
  isChosenList: [] as any,
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  setIsChosenList: (event: any) => {},
});

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    trigger,
    resetField,
    setValue,
    formState: { isSubmitting, errors },
  } = useForm<UserSignUpType>({ mode: 'onChange' });

  const { choose } = useContext(SignUpContext);
  const [onToggleEmailVerifiedForm, setOnToggleEmailVerifiedForm] = useState(false); // 이메일 인증 Form Switch, true : 인증 번호 확인, false : 인증 메일 발송
  const [isVerified, setIsVerified] = useState(false); // 인증 여부 확인
  const [isShownTrackForm, setIsShownTrackForm] = useState(false); // 다음 Track Form
  const [isChosenList, setIsChosenList] = useState(Subjects);
  const [user, setUser] = useRecoilState(userSignUpState);
  const [isVerifiedEmail, setIsVerifiedEmail] = useState('');
  const [hasCountReset, setCountReset] = useState(false);

  const onSubmit: SubmitHandler<UserSignUpType> = async (data) => {
    signUpApi({
      nickName: data.nickName,
      userId: data.userId,
      email: isVerifiedEmail,
      password: data.password,
      name: data.name,
      studentId: data.studentId,
      identity: choose === '졸업생' ? 'ROLE_GRADUATE' : 'ROLE_STUDENT',
      company: choose === '졸업생' ? data.company : 'null',
      track: 'NONE',
    });
    setUser({
      ...user,
      studentId: data.studentId,
    });
    setIsShownTrackForm(true);
  };

  const onChangeEmailForm = async () => {
    await emailApi(
      { email: getValues('email'), randomCode: getValues('verify') },
      setIsVerified,
      setIsVerifiedEmail,
      onToggleEmailVerifiedForm,
    );
    resetField('verify');
    setOnToggleEmailVerifiedForm(!onToggleEmailVerifiedForm);
  };

  return (
    <>
      {!isShownTrackForm && (
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
              disabled: isVerified,
              pattern: {
                value: /[a-zA-Z0-9]+@ajou.ac.kr/,
                message: '아주 이메일로만 인증이 가능합니다.',
              },
              onChange: async () => {
                await trigger('email');
              },
            })}
          />
          {!isVerified && (
            <>
              {!onToggleEmailVerifiedForm && (
                <Button
                  disabled={!getValues('email') || !!errors.email}
                  id="email"
                  type="button"
                  onClick={onChangeEmailForm}
                >
                  인증메일 발송
                </Button>
              )}
              {onToggleEmailVerifiedForm && (
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
                      max: 8,
                      onChange: async () => {
                        await trigger('verify');
                      },
                      validate: {
                        maxLength: () => {
                          const { verify } = getValues();
                          if (verify.length > 8) {
                            setValue('verify', verify.substring(0, 8));
                          }
                          return verify.length < 9 || '8자리 이상 입력하실 수 없습니다.';
                        },
                      },
                    })}
                  />
                  <Timer mm="3" ss="0" onReset={hasCountReset} setReset={setCountReset} />
                  <Button
                    disabled={!!errors.verify || !getValues('verify')}
                    id="verify"
                    type="button"
                    onClick={onChangeEmailForm}
                  >
                    인증하기
                  </Button>
                  <Button
                    fourth
                    onClick={() => {
                      resetField('verify');
                      emailApi(
                        {
                          email: getValues('email'),
                          randomCode: getValues('verify'),
                          reset: true,
                        },
                        setIsVerified,
                        setIsVerifiedEmail,
                      );
                      setCountReset(true);
                    }}
                  >
                    아주메일 재전송
                  </Button>
                </>
              )}
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
              onChange: async () => {
                await trigger('userId');
              },
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
                value: 12,
                message: '12자리 이하 비밀번호를 사용하세요.',
              },
              onChange: async () => {
                await trigger('password');
              },
              pattern: {
                value: /^(?=.*\d)(?=.*[a-zA-ZS]).{6,}/,
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
                value: 12,
                message: '12자리 이하 비밀번호를 사용하세요.',
              },
              pattern: {
                value: /^(?=.*\d)(?=.*[a-zA-ZS]).{6,}/,
                message: '영문과 숫자를 혼용하여 입력해주세요',
              },
              onChange: async () => {
                await trigger('pwcheck');
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
              onChange: async () => {
                await trigger('name');
              },
            })}
          />
          <Input
            label="닉네임"
            id="nickName"
            type="text"
            placehd="빙구"
            caption={errors.nickName?.message}
            autoFocus
            context={register('nickName', {
              required: '닉네임을 입력하세요.',
              onChange: async () => {
                await trigger('nickName');
              },
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
              onChange: async () => {
                await trigger('studentId');
              },
              pattern: {
                value: /^[0-9]+$/,
                message: '학번을 입력하세요.',
              },
            })}
          />
          {choose === '재학생' && (
            <Button
              id="signup"
              type="submit"
              disabled={
                !isVerified ||
                isSubmitting ||
                !!errors.userId ||
                !!errors.password ||
                !!errors.pwcheck ||
                !!errors.studentId ||
                !!errors.name ||
                !getValues('userId') ||
                !getValues('password') ||
                !getValues('pwcheck') ||
                !getValues('studentId') ||
                !getValues('name')
              }
            >
              다음으로
            </Button>
          )}
          {choose === '졸업생' && (
            <>
              <Input
                label="회사"
                id="company"
                type="text"
                placehd="미디어인더스트리"
                caption={errors.company?.message}
                autoFocus
                context={register('company', {
                  required: '회사를 입력하세요.',
                  onChange: async () => {
                    await trigger('company');
                  },
                })}
              />
              <Button
                id="signup"
                type="submit"
                disabled={
                  !isVerified ||
                  isSubmitting ||
                  !!errors.userId ||
                  !!errors.password ||
                  !!errors.pwcheck ||
                  !!errors.studentId ||
                  !!errors.name ||
                  !!errors.company ||
                  !getValues('userId') ||
                  !getValues('password') ||
                  !getValues('pwcheck') ||
                  !getValues('studentId') ||
                  !getValues('name') ||
                  !getValues('company')
                }
              >
                다음으로
              </Button>
            </>
          )}
        </SignUpFormContainer>
      )}
      <TrackContext.Provider value={{ isChosenList, setIsChosenList }}>
        {isShownTrackForm && <TrackForm studentId={user.studentId} />}
      </TrackContext.Provider>
    </>
  );
};

export default SignUpForm;
