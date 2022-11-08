import { InfoForm } from '@/Components/Form';
import { createContext, useState, ReactNode } from 'react';
import { SignUpWrapper } from './style';

interface SignUpProps {
  children: ReactNode | ReactNode[];
}

export const SignUpContext = createContext({
  choose: '',
  // eslint-disable-next-line no-unused-vars
  setChooseHandler: (event: string) => {},
});

export const SignUpProvider = ({ children }: SignUpProps) => {
  const [choice, setChoice] = useState('');
  const setChoiceHandler = (event: string) => setChoice(event);

  return (
    <SignUpContext.Provider value={{ choose: choice, setChooseHandler: setChoiceHandler }}>
      {children}
    </SignUpContext.Provider>
  );
};

const SignUpPage = () => (
  <SignUpWrapper>
    <SignUpProvider>
      <InfoForm />
    </SignUpProvider>
  </SignUpWrapper>
);

export default SignUpPage;
