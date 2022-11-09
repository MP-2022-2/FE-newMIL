import { InfoForm } from '@/Components/Form';
import { createContext, useState } from 'react';
import { SignUpWrapper } from './style';

export const SignUpContext = createContext({
  choose: '',
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  setChooseHandler: (event: string) => {},
});

const SignUpPage = () => {
  const [choice, setChoice] = useState('');
  const setChoiceHandler = (event: string) => setChoice(event);

  return (
    <SignUpWrapper>
      <SignUpContext.Provider value={{ choose: choice, setChooseHandler: setChoiceHandler }}>
        <InfoForm />
      </SignUpContext.Provider>
    </SignUpWrapper>
  );
};

export default SignUpPage;
