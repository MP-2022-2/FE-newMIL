import { LoginForm } from '@/Components/Form';
import Cookies, { CookieSetOptions } from 'universal-cookie';
import { LoginWrapper, LoginContainer, Logo } from './style';

const cookies = new Cookies();

export const setCookie = (name: string, value: string, option?: CookieSetOptions) =>
  cookies.set(name, value, { ...option });

export const getCookie = (name: string) => cookies.get(name);

const LoginPage = () => (
  <LoginWrapper>
    <LoginContainer>
      <Logo src="/pictures/MIL.png" />
      <LoginForm />
    </LoginContainer>
  </LoginWrapper>
);

export default LoginPage;
