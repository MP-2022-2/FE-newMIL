import CheckBox from '@/Components/CheckBox';
import Button from '@/Components/Button';
import { useContext, useState } from 'react';
import { SignUpContext } from '@/Pages/SignUp';
import {
  SignUpContainer,
  InfoContainer,
  Title,
  InfoFormContainer,
  ButtonContainer,
  CheckBoxContainer,
} from './style';
import SignUpForm from '../SignUpForm';

const InfoForm = () => {
  const [checked, setChecked] = useState(true);
  const { choose, setChooseHandler } = useContext(SignUpContext);

  return (
    <>
      {choose === '' && (
        <>
          <SignUpContainer>
            <Title>개인정보 활용 동의</Title>
            <InfoContainer>
              <p>
                이번 프로젝트에서 받는 개인정보는 사이트 내 정보 등록을 위해 개인정보 수집·이용에
                관한 동의서를 받고 있습니다. 개인정보 제공자가 동의한 내용 외의 다른 목적으로
                활용하지 않으며, 제공된 개인정보의 이용을 거부하고자 할 때에는 개인정보 관리
                책임자를 통해 열람·정정 혹은 삭제를 요구할 수 있습니다.
              </p>
              <br />
              <p>1. 개인정보 수집·이용 항목 필수항목 : 성명, 학번</p>
              <p>
                2. 개인정보 수집·이용 목적 미디어프로젝트 MIL 사이트 리뉴얼 내 개인 정보 등록을 위해
                이용
              </p>
              <p>3. 개인정보 보유 및 이용 기간 동의서가 작성된 때로부터 1년</p>
              <p>
                4. 개인정보 수집·이용에 대한 동의 거부 개인정보의 수집·이용을 거부할 수 있으며,
                개인정보의 수집·이용 등에 동의 거부 시 사이트 내 가입이 어려울 수 있습니다.
              </p>
            </InfoContainer>
          </SignUpContainer>
          <InfoFormContainer>
            <CheckBoxContainer>
              <CheckBox handleClick={() => setChecked(!checked)}>
                개인정보 활용에 동의합니다.
              </CheckBox>
            </CheckBoxContainer>
            <ButtonContainer>
              <Button onClick={() => setChooseHandler('재학생')} disabled={checked}>
                재학생
              </Button>
              <Button onClick={() => setChooseHandler('졸업생')} disabled={checked}>
                졸업생
              </Button>
            </ButtonContainer>
          </InfoFormContainer>
        </>
      )}
      {choose !== '' && (
        <SignUpContainer>
          <SignUpForm />
        </SignUpContainer>
      )}
    </>
  );
};

export default InfoForm;
